# Frogerless

Serverless functions that serves REST API endpoints to CRUD frog spottings.

### Installation

    npm i

### Supported endpoints

| Method |    Endpoint    |                   sample body                    | Expected Response                                                                                                                                              |
| :----: | :------------: | :----------------------------------------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  GET   | /spot/location |                       N/A                        | {"data": [{"id": "1676853247209","FrogType": "asdfs"},{"id": "function now() { [native code] }","FrogType": "asdfs"},{"id": "123123","FrogType": "12312312"}]} |
|  POST  | /spot/location | {"frogType": "BullFrog", "location":"Greenwich"} | x                                                                                                                                                              |

### Run locally

    npm run dev

### Deploy

    serverless deploy
