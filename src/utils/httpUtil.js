/**
 * http工具类
 */
import axios from 'axios';
import qs from 'qs';

// 超时时间
axios.defaults.timeout = 60000;
// 基础地址
axios.defaults.baseURL = process.env.BASE_URL;

// // 请求拦截器——处理请求头等
// axios.interceptors.request.use((config) => {
//     config.headers = {
//         'Accept': 'application/json, text/javascript, */*; q=0.01',
//         'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
//     };
//     if (config.method === 'post') {
//         if (config.data.isJsonParam) {
//             config.headers['Content-Type'] = 'application/json;charset=UTF-8';
//             // 序列化
//             config.data = JSON.stringify(config.data);
//         } else {
//             // 转url参数
//             config.data = qs.stringify(config.data, {allowDots: true});
//         }
//     }
//     return config;
// }, (error) => {
//     return Promise.reject(error);
// });

// // 响应拦截器——返回状态判断
// axios.interceptors.response.use((res) => {
//     let code = res.data.responseCode;

//     // 获取数据流
//     if (!code) {
//         if (res.data.length) {
//             return Promise.resolve(res);
//         }
//         return Promise.reject(res);
//     }
//     // 通用处理
//     switch (code) {
//     case '100000':
//         // return res;
//         return Promise.resolve(res);
//     case '680001':
//         // session失效跳转链接
//         window.top.location.href = process.env.SESSION_INVALID_URL;
//         return Promise.reject(res);
//     default:
//         return Promise.reject(res.data);
//     }
// }, (error) => {
//     let data = {
//         data: {
//             responseCode: error.response.status,
//             message: '网络异常，请稍后再试'
//         }
//     }

//     return Promise.reject(data);
// });

// export default {
//     // 发送get请求
//     get: function(url, params) {
//         return new Promise((resolve, reject) => {
//             axios.get(url, { params: params })
//                 .then(response => {
//                     resolve(response.data);
//                 }, err => {
//                     reject(err);
//                 })
//                 .catch((error) => {
//                     reject(error)
//                 })
//         })
//     },
//     // 发送post请求，如果参数是json格式，请加传{isJsonParam：true}
//     post: function(url, params) {
//         return new Promise((resolve, reject) => {
//             axios.post(url, params)
//                 .then(response => {
//                     resolve(response.data);
//                 }, err => {
//                     reject(err);
//                 })
//                 .catch((error) => {
//                     reject(error)
//                 })
//         })
//     }
// }
// 响应拦截器——返回状态判断
axios.interceptors.response.use((res) => {
    // // 获取数据流
    let code = res.data.responseCode;

    if (code) {
        // 通用处理
        switch (code) {
        case '100000':
            // return res;
            return Promise.resolve(res);
        case '680001':
            // session失效跳转链接
            window.top.location.href = process.env.SESSION_INVALID_URL;
            return Promise.reject(res);
        default:
            return Promise.reject(res.data);
        }
    } else {
        if (res.data) {
            return Promise.resolve(res);
        }
        return Promise.reject(res);
    }

}, (error) => {
    let data = {
        data: {
            responseCode: error.response.status,
            message: '网络异常，请稍后再试'
        }
    }

    return Promise.reject(data);
});

export default {
    // 发送get请求
    get: function(url, params) {
        return new Promise((resolve, reject) => {
            axios({
                method : 'get',
                url : url,
                jsonpCallback:'jsonpCallback',
                params :  params,
                timeout : 30000,
                headers:{
                    'Content-type': 'application/x-www-form-urlencoded'
                }
            }).then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            }).catch((error) => {
                reject(error)
            })
        })
    },
    // 发送post请求，如果参数是json格式，请加传{isJsonParam：true}
    post: function(url, params) {
        let param,
            headers;

        if (params.isJsonParam) {
            headers = {
                'Content-Type': 'application/json;charset:utf-8;'
            }
            // 序列化
            param = JSON.stringify(params);
        } else {
            headers = {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }
            // 转url参数
            param = qs.stringify(params, {allowDots: true});
        }
        return new Promise((resolve, reject) => {
            axios({
                method : 'post',
                url : url,
                jsonpCallback:'jsonpCallback',
                data :  param,
                timeout : 30000,
                headers : headers
            }).then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            }).catch((error) => {
                reject(error)
            })
        })
    },
    downLoad: function(url, params) {
        return new Promise((resolve, reject) => {
            axios({
                method : 'get',
                url : url,
                jsonpCallback:'jsonpCallback',
                params :  params,
                timeout : 30000,
                headers : {
                    'Content-Type' : 'application/json;charset:utf-8;'//application/json;
                },
                responseType: 'arraybuffer'
            }).then(response => {
                let blob = new Blob([response.data], {type: 'application/vnd.ms-excel'});
                let objectUrl = URL.createObjectURL(blob);

                resolve(objectUrl);
            }, err => {
                reject(err);
            }).catch((error) => {
                reject(error)
            })
        })
    },
    upLoad: function (url, params) {
        return new Promise((resolve, reject) => {
            axios({
                method : 'post',
                url : url,
                jsonpCallback:'jsonpCallback',
                data :  params,
                timeout : 30000,
                headers : {
                    'Content-Type' : 'multipart/form-data'//application/json;
                }
            }).then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            }).catch((error) => {
                reject(error)
            })
        })
    }
}
