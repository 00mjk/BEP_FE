import { Axios } from '@axios/axiosInstance'
import { IAxiosResponse, IAxiosResponsePaginated } from '@axios/axiosTypes'
import {
  EducationalInstitutesPageParam,
  IEdInstitutesResponse,
  IIndividualEducationalInstituteResponse,
  IProvinces,
} from '@axios/educational-institutes/edInstitutesManagerTypes'

const baseURL = 'educational-institution'

const axiosInstance = Axios()
const educationalInstitutesManager = {
  axiosInstance,
  educationalInstitutes(params: EducationalInstitutesPageParam) {
    return axiosInstance.post<
      EducationalInstitutesPageParam,
      IAxiosResponsePaginated<IEdInstitutesResponse[]>
    >(`/core/v1/${baseURL}`, { ...params })
  },
  getIndividualEducationalInstitutes(id: string) {
    return axiosInstance.get<
      IIndividualEducationalInstituteResponse,
      IAxiosResponse<IIndividualEducationalInstituteResponse>
    >(`/core/v1/${baseURL}/${id}`)
  },
  getProvinces() {
    return axiosInstance.get<IProvinces, IAxiosResponse<IProvinces>>(`/core/v1/${baseURL}/province`)
  },
}

export default educationalInstitutesManager
