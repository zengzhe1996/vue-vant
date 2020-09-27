import request from '@/utils/request'

const list = params => request.postJson('/ksh-meeting/big_class/query', params)

export default{
  list
}