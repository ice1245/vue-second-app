export default {
  async contactCoach(context,payload){
    console.log('Called Contact Coach');
    const newRequest= {
      userEmail:payload.email,
      message:payload.message
    }
    const response = await fetch(`https://vue-js-2-practice-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,{
      method:'POST',
      body:JSON.stringify(newRequest)

    })
    const responseData = await response.json()
    console.log(responseData)
    if(!response.ok){
      throw new Error(responseData.message || 'Failed to send request.')
    }
    newRequest.coachId = payload.coachId
    newRequest.id = responseData.name;

    context.commit('addRequest',newRequest)
  },
  async fetchRequests(context){

    const coachId = context.rootGetters.userId
    const url = `https://vue-js-2-practice-default-rtdb.firebaseio.com/requests/${coachId}.json`

    const response = await fetch(url)
    const responseData = await response.json()

    if(!response.ok){

      throw new Error(responseData.message ||'Failed to fetch requests.')
    }
      const requests = []
    for (const key in responseData){

      const request ={
        id:key,
        coachId :coachId,
        userEmail:responseData[key].userEmail,
        message:responseData[key].message,

      }
      requests.push(request)
    }

    context.commit('setRequests',requests)
  }
}