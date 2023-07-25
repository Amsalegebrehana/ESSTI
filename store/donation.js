
import axios from "axios"
require('dotenv').config()

const state = {
    donationInfo: {},
  }
const getters = {
    
    getDonationInfo: (state) => state.donationInfo,
  }

const actions = {
    async createDonation({ commit }, donationInfo) {
        try {
            const res = await axios.post('https://eskcadmin.onrender.com/api/donation/', donationInfo)
            commit('SET_DONATIONINFO', donationInfo)
            return res
        } catch (error) {
            return error
        }
    }
    }
const mutations = {
    SET_DONATIONINFO(state, donationInfo) {
        state.donationInfo = donationInfo
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}