export default {
  addRequest(state,payload){
    console.log('Called ADD Request');
    console.log(payload)
    state.requests.push(payload)
  },
  setRequests(state,payload){
    console.log(payload);

    state.requests = payload
  }
}