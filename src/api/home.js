import request from '@/utils/request'

const list = params => request.post('/ksh-meeting/big_class/query', params)

export default{
  list
}