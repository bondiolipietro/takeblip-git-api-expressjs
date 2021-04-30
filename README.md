# Take Blip Git Repos API

A REST API that returns github repositories, it works integrated with a ChatBot builded at TakeBlip platform. The API makes all requests over https://api.github.com/repos/takenet/, so it only returns repositories of Takenet org. The API was deployed to Heroku and can be accessed on https://takeblip-git-api-expressjs.herokuapp.com/.

## Installation

---

**Running it in development mode:**

Using yarn:

```bash
yarn install && yarn dev
```

Using npm:

```bash
npm install && npm run dev
```

**In production mode:**

Using yarn:

```bash
yarn install && yarn start
```

Using npm:

```bash
npm install && npm run start
```

## Documentation - API Routes

---

### **Get All Repositories - GET**

**Route**

| METHOD | ROUTE                        | STATUS CODES | EXAMPLE WITH PARAMS / QUERY STRINGS                            |
| ------ | ---------------------------- | ------------ | -------------------------------------------------------------- |
| GET    | /api/v1/takeblip/repositories/ | 200 / 400    | /api/v1/takeblip/repositories?language=C%23&order_by=old&limit=5 |

**Query String Parameters**

| PARAM    | TYPE    | REQUIRED/OPTIONAL | EXAMPLES                    | ALLOWED PARAMS | DESCRIPTION                                                                                                 |
| -------- | ------- | ----------------- | --------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------- |
| language | String  | Optional          | C%23 (C#) / JavaScript / Go | \*             | API will only return repositories that has the specified language as main                                   |
| order_by | String  | Optional          | new / old                   | new / old      | API will sort repositories by date according to this param                                                  |
| limit    | Integer | Optional          | 5 / 16 / 64                 | \*             | Applied over the final response object, only the first X (limit) repositories in the array will be returned |

**Response Body**

| FIELD  | TYPE   | DESCRIPTION                                                 |
| ------ | ------ | ----------------------------------------------------------- |
| status | String | Returns "ok" or "error"                                     |
| data   | List   | Returns a list of [Repository](#repository)                 |
| msg    | String | Returns a message if needed, mainly used to describe errors |

```json
{
  "status": String,
  "data": Repository[],
  "msg": String
}
```

### **Get Repository - GET**

**Route**

| METHOD | ROUTE                                 | STATUS CODES | EXAMPLE WITH PARAMS / QUERY STRINGS   |
| ------ | ------------------------------------- | ------------ | ------------------------------------- |
| GET    | /api/v1/takeblip/repositories/:repoName | 200 / 400    | /api/v1/takeblip/repositories/blip-docs |

**Parameters**

| PARAM    | DATA TYPE | REQUIRED/OPTIONAL | EXAMPLES  | ALLOWED PARAMS | DESCRIPTION                          |
| -------- | --------- | ----------------- | --------- | -------------- | ------------------------------------ |
| repoName | String    | Required          | blip-docs | \*             | The name of the repository you want. |

**Response Body**

| FIELD  | TYPE                      | DESCRIPTION                                                 |
| ------ | ------------------------- | ----------------------------------------------------------- |
| status | String                    | Returns "ok" or "error"                                     |
| data   | [Repository](#repository) | Returns a [Repository](#repository)                         |
| msg    | String                    | Returns a message if needed, mainly used to describe errors |

```json
{
  "status": String,
  "data": Repository,
  "msg": String
}
```

<a id="repository"></a>**Repository Model**

```json
{
  "name": String,
  "full_name": String,
  "description": String,
  "owner": String,
  "owner_avatar_url": String,
  "created_at": YYYY-MM-DDTHH:mm:ss.SSZ,
  "updated_at": YYYY-MM-DDTHH:mm:ss.SSZ,
  "pushed_at": YYYY-MM-DDTHH:mm:ss.SSZ,
  "git_url": String,
  "ssh_url": String,
  "language": String
}
```

### **Get All Members - GET**

**Route**

| METHOD | ROUTE                    | STATUS CODES |
| ------ | ------------------------ | ------------ |
| GET    | /api/v1/takeblip/members/ | 200 / 400    |

**Response Body**

| FIELD  | TYPE   | DESCRIPTION                                                 |
| ------ | ------ | ----------------------------------------------------------- |
| status | String | Returns "ok" or "error"                                     |
| data   | List   | Returns a list of [Member](#member)                         |
| msg    | String | Returns a message if needed, mainly used to describe errors |

```json
{
  "status": String,
  "data": Member[],
  "msg": String
}
```

<a id="member"></a>**Member Model**

```json
{
  "name": String,
  "avatar_url": String,
  "url": String
}
```

## Author

---

- Pietro Bondioli ([@bondiolipietro](https://github.com/bondiolipietro))

## License

---

[MIT](https://opensource.org/licenses/MIT)
