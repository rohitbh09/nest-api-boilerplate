import * as config from "config";
import Client from "ioredis";

const RedisConfig = config.get("Redis")


export class RedisUtils {
    static redisClient;
    static redisConnection;
    constructor(){
        try{
            RedisUtils.redisClient = new Client({
                host: RedisConfig.host,
                port: RedisConfig.port,
                password: RedisConfig.pass,
                db: RedisConfig.db
            });

            RedisUtils.redisConnection = RedisConfig.redisClient;
        } catch (error){
            console.log("RedisUtils Exception ==>", error);
        }
    }
}