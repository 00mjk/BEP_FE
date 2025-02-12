import { IEventsListParams, IEventsListProps } from '@allTypes/reduxTypes/eventsStateTypes'
import { Axios } from '@axios/axiosInstance'
import { IAxiosResponsePaginated } from '@axios/axiosTypes'

const baseURL = 'event'

const axiosInstance = Axios()
const eventsManager = {
  axiosInstance,
  getEvents(params: IEventsListParams) {
    return axiosInstance.get<IEventsListProps, IAxiosResponsePaginated<IEventsListProps[]>>(
      `/core/v1/${baseURL}`,
      {
        params,
      }
    )
  },
  getIndividualEvent(id: string) {
    return axiosInstance.get<IEventsListProps, IAxiosResponsePaginated<IEventsListProps>>(
      `/core/v1/${baseURL}/${id}`
    )
  },
}

export default eventsManager
