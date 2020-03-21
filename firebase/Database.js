import firebase from './Firestore';

/*
    restaurants collection doc format:
        doc name: restaurant name
        @banner: photo url, .....
        @categories: {{id, name, color, image}, ....}
        @food: [{name, price, categories, image}, ....]
        @nextONum integer that will become the next order's orderNumber


    users collection doc format:
        doc name: phoneNum
        @email: string
        @firstName: string
        @lastName: string

    order collections doc format:
        doc name: orderNumber
        @firstName: string
        @phoneNum: string
        @orderedItems: [{name, price, categories, image}, ....]
        @address: string
        @note: string


*/

export default class Database {
  /** no constructor for you */
  Database() {}

  // /**
  //  * promise method to create a new user to the database
  //  * @param id is the user id
  //  * @param email is the user email
  //  * @return true if added user successfully, else false
  //  * @throws some sort of firebase error
  //  */
  async addUser(phoneNum, email, firstName, lastName) {
     const db = firebase.firestore();
     const userRef = db.collection('users').doc(phoneNum);
     if (await userRef.get().then(doc=>{return !doc.exists})) {
        const userData = {'email' : email, 'firstName': firstName, 'lastName':lastName, 'currentOrders': []};
        await userRef.set(userData);
        console.log('Added user successfully');
        return true;
     }else{
        console.log('user ID already exists');
        return false;
     }
  }

  async addOrder(userPhone, restaurant, firstName, lastName, phoneNum, orderedItems, address, note) {
         const db = firebase.firestore();
         restaurant = restaurant.toLowerCase();
         const restaurantRef = db.collection('restaurants').doc(restaurant);
         let orderNum = await db.runTransaction(t => {
            return t.get(restaurantRef).then(doc => {
                let orderNum = doc.data().nextONum;
                t.update(restaurantRef,{'nextONum': doc.data().nextONum+1});
                return Promise.resolve(orderNum);
            })
         })
         const orderRef = db.collection(restaurant+"Orders").doc(orderNum.toString());
         if (await orderRef.get().then(doc=>{return !doc.exists})) {
            const userRef = db.collection("users").doc(userPhone);
            if (await userRef.get().then(doc=>{return doc.exists})) {
              const orderData = {'firstName' : firstName, 'lastName':lastName, 'phoneNum':phoneNum ,'orderedItems':orderedItems,'address':address, 'note': note, 'state': 0};
              await orderRef.set(orderData);
              await userRef.update({
                "currentOrders": firebase.firestore.FieldValue.arrayUnion(restaurant+ "/"+orderNum)
              });
            }else{
                console.log('userPhone '+ userPhone +' doesnt exists');
                return false;
            }
            console.log('Added order '+orderNum +' successfully');
            return true;
         }else{
             console.log('orderID '+ orderNum +' already exists');
             return false;
         }
  }


  /**
   * adds restaurant to the database
   * @param name is the restaurant name
   * @param data is the restaurant menu
   * @throws some sort of firebase error
   */
  async addRestaurant(name, banner, categories, food) {
    name = name.toLowerCase();
    const db = firebase.firestore();
    const restaurantRef = db.collection('restaurants').doc(name);
    if (await restaurantRef.get().then(doc => {return !doc.exists})) {
      await restaurantRef.set({'banner':banner, 'categories':categories, 'food':food, 'nextONum': 0});
      console.log('Added restaurant successfully');
      return true;
    } else {
      console.log('restaurant already exists');
      return false;
    }
  }

  /**
   * get restaurant information
   * @param name is the restaurant name
   * @throws some sort of firebase error
   */
  async getRestaurant(name) {
    name = name.toLowerCase();
    const result = await firebase.firestore().collection('restaurants').doc(name).get();
    return result ? result.data() : null;
  }
    // /**
    //  * returns a promise of user information for a given user id
    //  * @param id is a string of a user ID
    //  * @return promise of user information if id exists, else it returns a
    //  string
    //  * @throws some sort of firebase error
    //  */
    async getUser(id) {
       const result = await firebase.firestore().collection('users').doc(id).get();
       return result ? result.data() : null;
    }

    async getOrder(orderID, restaurant) {
        restaurant = restaurant.toLowerCase();
        const result = await firebase.firestore().collection(restaurant+"Orders").doc(orderID.toString()).get();
        return result ? result.data() : null;
    }


    async editRestaurant(name, banner, categories, food, nextONum) {
       const db = firebase.firestore();
       name = name.toLowerCase();
       const restaurantRef = db.collection('restaurants').doc(name);
       if (await restaurantRef.get().then(doc => {return doc.exists})) {
             await restaurantRef.set({'banner':banner, 'categories':categories, 'food':food, 'nextONum':nextONum});
             console.log('modified restaurant data successfully');
             return true;
       } else {
             console.log('cant modify non-existant restaurant '+name);
             return false;
       }
    }

    async editUser(phoneNum, email, firstName, lastName, currentOrders) {
       const db = firebase.firestore();
       const userRef = db.collection('users').doc(phoneNum);
       if (await userRef.get().then(doc => {return doc.exists})) {
             const userData = {'email' : email, 'firstName': firstName, 'lastName':lastName, 'currentOrders':currentOrders};
             await userRef.set(userData);
             console.log('modified user data successfully');
             return true;
       } else {
             console.log('cant modify non-existant user '+phoneNum);
              return false;
       }
    }

    async editOrder(orderID, restaurant, firstName, lastName, phoneNum, orderedItems, address, note, state) {
           const db = firebase.firestore();
           restaurant = restaurant.toLowerCase();
           const orderRef = db.collection(restaurant+"Orders").doc(orderID);
           if (await orderRef.get().then(doc=>{return doc.exists})) {
                  const orderData = {'phoneNum' : phoneNum,'firstName':firstName,'lastName':lastName ,'orderedItems':orderedItems,'address':address,'note':note, 'state':state};
                  await orderRef.set(orderData);
                  console.log('modified order successfully');
                  return true;
           }else{
                  console.log('cant modify non-existant order');
                  return false;
           }
    }

    async inrementOrderState(orderID, restaurant){
      const db = firebase.firestore();
      restaurant = restaurant.toLowerCase();
      var orderRef = db.collection(restaurant+"Orders").doc(orderID);
      if (await orderRef.get().then(doc=>{return doc.exists})) {
        orderRef.update({
          state: firebase.firestore.FieldValue.increment(1)
        });
        console.log("incremented order "+ orderID);
        return true;
      }else{
        console.log("failed increment orderID doesnt exist "+ orderID);
        return false;
      }
    }

     async deleteUser(id){
            const db = firebase.firestore();
            const userRef = db.collection('users').doc(id);

            if (await userRef.get().then(doc => {return doc.exists})) {
                 await userRef.delete();
                 console.log('deleted user '+id+' successfully');
                 return true;
            } else {
                 console.log('cant delete non-existant user '+id);
                 return false;
            }
     }

     async deleteRestaurant(name){
          const db = firebase.firestore();
          name = name.toLowerCase();
          const restaurantRef = db.collection('restaurants').doc(name);
          if (await restaurantRef.get().then(doc => {return doc.exists})) {
                await restaurantRef.delete();
                console.log('deleted restaurants '+name+' successfully');
                return true;
          } else {
                console.log('cant delete non-existant restaurants '+name);
                return false;
          }
     }

        async deleteOrder(orderID, restaurant) {
               const db = firebase.firestore();
               restaurant = restaurant.toLowerCase();
               const orderRef = db.collection(restaurant+"Orders").doc(orderID);
               if (await orderRef.get().then(doc=>{return doc.exists})) {
                      await orderRef.delete();
                      console.log('deleted order '+orderID+' successfully');
                      return true;
               }else{
                      console.log('cant deleted non-existant order '+orderID);
                      return false;
               }
        }

        async realTimeUserOrders(userPhone, arrayOfOrders){
            const db = firebase.firestore();
            let doc = db.collection("users").doc(userPhone);
            global.observer = doc.onSnapshot(docSnapshot => {
                docSnapshot.data().currentOrders.forEach(function(item, index, array) {
                    arrayOfOrders[index] = item;
            }, err => {
                console.log('Encountered error: ${err}');
            });
        }

        async unsubOrders(){
          global.observer();
        }

        async realTimeRestaurantOrders(restaurant, state, arrayOfOrders){
          if(state<0){                        //return orders of all states
            const db = firebase.firestore();
            global.rObserver =  db.collections(restaurant+"Orders").onSnapshot(query =>{
              query.docChanges().forEach(change => {
                  arrayOfOrders.arrayUnion(change.doc.data())
              });
            });
          }else if (state<=3){                //returns unconfirmed orders
            global.rObserver =  db.collections(restaurant+"Orders").where('state'==state).onSnapshot(query =>{
                query.docChanges().forEach(change => {
                    arrayOfOrders.arrayUnion(change.doc.data())
                });
            });
          }else{
            console.log("Invalid State");
          }
        }

}


const db = new Database();
//db.addRestaurant("D-Plus Pizza", 'fake_banner_url', "set of category objects","array of food objects");
//db.addUser('999-999-9999','fakeemail@gmail.com', 'first_name', 'last_name');
const array = [];
db.realTimeUserOrders('999-999-9999', array)
db.addOrder('999-999-9999','testRestaurant','first_name', 'last_name', '999-999-9999','some fancy water','some_address','allergy to peanuts').then(response=>{
  console.log("array is "+ array);
  db.unsubOrders();
})
//db.editOrder('0','testRestaurant','real_first', 'real_last', '777-777-7777', 'some edited fancy water','some_address','note: allergy to peanuts',0)
//db.editRestaurant('testRestaurant', 'fake_banner_url', "set of category objects","array of food objects",0)
//db.editUser('999-999-9999', 'totallyrealemail@gmail.com', 'first_name', 'last_name', [])
//db.inrementOrderState('0','testRestaurant')
const responseR = db.getRestaurant('testRestaurant').then(responseR=>{
    if(responseR!=null){
        console.log('the queried restaurant data ' +responseR.food+', '+ responseR.nextONum+'\n');
    }else{
        console.log('menu not found\n');
    }
return;
})
const responseU = db.getUser('999-999-9999').then(responseU=>{
    if(responseU!=null){
        console.log('the queried user data is ' +responseU.email+', '+responseU.firstName +', '+responseU.currentOrders +'\n');
    }else{
        console.log('user data not found\n');
    }
return;
})
const responseO = db.getOrder(0,'testRestaurant').then(responseO=>{
    if(responseO!=null){
        console.log('the queried order data is ' +responseO.orderedItems+', '+responseO.phoneNum+', '+responseO.note+', state is '+responseO.state +'\n');
    }else{
        console.log('order data not found\n');
    }
return;
})

/*
db.deleteRestaurant('testRestaurant');
db.deleteUser('999-999-9999');
db.deleteUser('999-999-9999');
db.deleteOrder('0','testRestaurant')*/
