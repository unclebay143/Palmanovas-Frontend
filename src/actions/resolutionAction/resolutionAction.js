import ResolutionService from "../../services/resolution/resolution.service"

export const sendResolutionDetails = (payLoad) => dispatch =>{
    return ResolutionService.sendResolutionComplain(payLoad)
}