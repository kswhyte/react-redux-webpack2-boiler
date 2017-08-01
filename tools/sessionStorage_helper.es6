
class sStorage {
  constructor(){
    this.storage = Window.sessionStorage;

  }

  static setItem(item) {
    sessionStorage.setItem(item.key, item.value);
    return {status: true, message: 'item was set', err: []}
  }

  static removeItem(item) {
    if(this.getItem(item.key, item.value)){
      sessionStorage.removeItem(item.key);
      return {status: true, message: 'item removed', err: []}
    } else {
      return {status: false, message: 'item was not found in storage', err: [{type: 404, message: 'not found'}]}
    }
  }

  static getItem(item){
    if(sessionStorage.length === 0){
      return {status: false, message: 'Session Storage is empty', item: null, err: [{type: 400, message: 'Session Storage is empty'}]}
    }
    const ret = sessionStorage.getItem(item.key);
    return {status: true, message: 'Item retrieved', item: ret, err: []};
  }

  static logoutUser(data){

  }

  static loginUser(data){

  }
}

export default sStorage;
