export const dbResponse = (response, success = true, code = 200) => {
    return {
    'success': success,
    'status': code,
    'response': response
}}