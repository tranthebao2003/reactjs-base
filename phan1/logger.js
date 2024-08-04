export const TypeLog = 'log'
export const TypeWarn = 'warn'
export const TypeError = 'error'

function logger(log, type = TypeLog){
    console[type](log)
}

// mỗi file chỉ có 1 export default duy nhất và có thể nhìu file export
export default logger