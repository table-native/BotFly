let client = require("botfly-model/clientjs/user_service_grpc_web_pb");

let userService = new client.UserServiceClient("http://52.172.253.182:8080");
export default {
    userService: userService
};