export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId
    const coachData = {
      firstName:data.first,
      lastName:data.last,
      hourlyRate:data.rate,
      description:data.disc,
      areas:data.areas
    };
   const response = await fetch(`https://vue-js-2-practice-default-rtdb.firebaseio.com/coaches/${userId}.json`,{
      method:'PUT',
      body:JSON.stringify(coachData)
    })
    // const responseData = await response.json()
    if (!response.ok){
      //
    }
    context.commit('registerCoach',{...coachData,id:userId})
  },
  async loadCoaches(context,payload){
    if (!payload.forceRefresh && !context.getters.shouldUpdate){
      return
    }
    const response = await fetch(`https://vue-js-2-practice-default-rtdb.firebaseio.com/coaches.json`)
    const responseData = await response.json()
    if (!response.ok){
      //----
      throw  new Error(responseData.message || 'Failed to fetch!')
    }
    const coaches = [];
    for (const key in responseData){
      const coach = {
        id : key,
        firstName:responseData[key].firstName,
        lastName:responseData[key].lastName,
        hourlyRate:responseData[key].hourlyRate,
        description:responseData[key].description,
        areas:responseData[key].areas
      }
      coaches.push(coach)
    }
    context.commit('setCoaches',coaches)
    context.commit('setFetchTimestamp')
  }
};