"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sampleData = {
    products: [
        {
            "productId": "d35623ee-bef6-42b2-8776-2f99f8bb4782",
            "name": "Pinkscale Blazing Star",
            "price": 456.04,
            "rating": 2.25,
            "stockQuantity": 124834
        },
        {
            "productId": "8ac1ac77-7358-425e-be16-0bdde9f02e59",
            "name": "Gila Milkvetch",
            "price": 899.05,
            "rating": 3.56,
            "stockQuantity": 799402
        },
        {
            "productId": "1afc136b-4d9f-4e8e-aace-8e1df908a404",
            "name": "Rocky Mountain Zinnia",
            "price": 264.37,
            "rating": 3.23,
            "stockQuantity": 842192
        },
        {
            "productId": "af84cc12-4fea-4f58-aece-f2ce92ca9580",
            "name": "Guadalupe Suncup",
            "price": 555.93,
            "rating": 4.09,
            "stockQuantity": 236333
        },
        {
            "productId": "86e3bb1c-2f5d-4774-98f3-4df7cddd0a0f",
            "name": "Saline Phlox",
            "price": 82.62,
            "rating": 4.8,
            "stockQuantity": 601208
        },
        {
            "productId": "26b017c6-06d8-443f-9b4a-d6b1cee6f4c0",
            "name": "Common Brighteyes",
            "price": 435.44,
            "rating": 0.27,
            "stockQuantity": 124068
        },
        {
            "productId": "440c9e80-6bf8-4eb3-b2d2-f81936d67de3",
            "name": "Vermejo Phlox",
            "price": 759.15,
            "rating": 2.46,
            "stockQuantity": 234525
        },
        {
            "productId": "98255f4e-40a6-470f-89a5-0792729f8947",
            "name": "Purple Marshlocks",
            "price": 974.99,
            "rating": 4.82,
            "stockQuantity": 739009
        },
        {
            "productId": "2a339fb2-f9f3-43bc-a85a-b217a0a38f12",
            "name": "Hamatocaulis Moss",
            "price": 639.9,
            "rating": 1.17,
            "stockQuantity": 754285
        },
        {
            "productId": "8a8391b2-b4ac-4847-b652-66ffd8d65875",
            "name": "Wax Myrtle",
            "price": 62.95,
            "rating": 4.6,
            "stockQuantity": 205240
        },
        {
            "productId": "be2157fb-7454-405e-9511-bf7ba81b7726",
            "name": "Thladiantha",
            "price": 699.0,
            "rating": 1.65,
            "stockQuantity": 399124
        },
        {
            "productId": "fdf1ba3d-fa06-4ce5-90ff-d081c5d37176",
            "name": "Common Tarweed",
            "price": 899.61,
            "rating": 2.39,
            "stockQuantity": 196884
        },
        {
            "productId": "afded6df-058f-477d-9878-e0e0b1d3dff3",
            "name": "Smooth Phlox",
            "price": 575.6,
            "rating": 4.38,
            "stockQuantity": 673658
        },
        {
            "productId": "daa29167-82a7-474b-9687-b8b903e7ec69",
            "name": "Lemmon's Beggarticks",
            "price": 492.35,
            "rating": 1.07,
            "stockQuantity": 205143
        },
        {
            "productId": "ccb83982-71f3-4497-bad8-7e64c6920dc6",
            "name": "Globe Fimbry",
            "price": 304.69,
            "rating": 2.62,
            "stockQuantity": 388596
        },
        {
            "productId": "1936d406-e89e-40e4-bff7-1827532269d4",
            "name": "Columbia Milkvetch",
            "price": 845.15,
            "rating": 2.21,
            "stockQuantity": 631658
        },
        {
            "productId": "c849a535-5f8b-47e3-889c-015693a644ac",
            "name": "Girdlepod",
            "price": 880.09,
            "rating": 1.49,
            "stockQuantity": 65457
        },
        {
            "productId": "0c3e80ee-59b3-4fc4-b760-8b07acc2d3ae",
            "name": "Lindley's Clerodendrum",
            "price": 51.66,
            "rating": 1.53,
            "stockQuantity": 263383
        },
        {
            "productId": "d8f5bee3-f3eb-4071-a124-6b857e0fd798",
            "name": "Arizonia Dry Rock Moss",
            "price": 746.88,
            "rating": 4.71,
            "stockQuantity": 616812
        },
        {
            "productId": "8d15de86-0e4a-4414-9166-7a33610202d3",
            "name": "Clamshell Orchid",
            "price": 17.1,
            "rating": 0.79,
            "stockQuantity": 604774
        },
        {
            "productId": "ea8fd0b9-c2d9-4d43-9c23-44cb99d079bb",
            "name": "Fourleaf Mare's-tail",
            "price": 905.04,
            "rating": 3.71,
            "stockQuantity": 909107
        },
        {
            "productId": "25d01c80-bca1-4a00-b1d0-0fbd39ff9e89",
            "name": "Simpson's Rosinweed",
            "price": 184.41,
            "rating": 1.98,
            "stockQuantity": 953695
        },
        {
            "productId": "1d6df6e3-b7ea-4507-9d66-87c6ee8ed5b9",
            "name": "Lobelia",
            "price": 163.6,
            "rating": 0.81,
            "stockQuantity": 341530
        },
        {
            "productId": "000a8c23-5bca-436c-a216-4e747a94c511",
            "name": "Yew Plum Pine",
            "price": 196.27,
            "rating": 1.6,
            "stockQuantity": 967173
        },
        {
            "productId": "c5b600dc-6bfb-492a-b335-c3cc8c707959",
            "name": "Thimbleberry",
            "price": 602.37,
            "rating": 0.13,
            "stockQuantity": 162208
        },
        {
            "productId": "9d5fafbc-312b-47e8-ada1-283918f0c3b5",
            "name": "Yellowturbans",
            "price": 564.82,
            "rating": 4.74,
            "stockQuantity": 33021
        },
        {
            "productId": "0114d5d4-ae48-46fa-b0ca-afe60eb88add",
            "name": "Field Brome",
            "price": 664.2,
            "rating": 0.13,
            "stockQuantity": 363992
        },
        {
            "productId": "e5b0da8c-148d-4680-b262-8609fb8a10da",
            "name": "Pentas",
            "price": 685.1,
            "rating": 1.5,
            "stockQuantity": 635092
        },
        {
            "productId": "2be5b024-2c96-4f29-912c-c6f36353f799",
            "name": "Strigose Beard Lichen",
            "price": 373.81,
            "rating": 1.06,
            "stockQuantity": 35383
        },
        {
            "productId": "fcf2e432-62a3-4b6f-a34d-36e42a12272e",
            "name": "Mad River Fleabane",
            "price": 669.97,
            "rating": 1.34,
            "stockQuantity": 880242
        },
        {
            "productId": "fc4c81e5-f1ac-40f5-8c6f-da3fbad5599d",
            "name": "Chickenthief",
            "price": 100.11,
            "rating": 0.49,
            "stockQuantity": 896782
        },
        {
            "productId": "07238d8e-0037-4972-87ca-0df206ee3e42",
            "name": "Palmleaf Poppymallow",
            "price": 22.99,
            "rating": 3.42,
            "stockQuantity": 635344
        },
        {
            "productId": "154b7860-23a2-4564-ad99-1745ab7122ef",
            "name": "Guayanan Waterclover",
            "price": 45.45,
            "rating": 0.34,
            "stockQuantity": 456487
        },
        {
            "productId": "8d4bf814-65d4-4df4-84cc-68911d925fdf",
            "name": "Emory's Acacia",
            "price": 847.6,
            "rating": 1.79,
            "stockQuantity": 638956
        },
        {
            "productId": "a52bf1bd-3d35-4cd2-849a-354e3952e2d2",
            "name": "American Century Plant",
            "price": 969.47,
            "rating": 3.66,
            "stockQuantity": 248630
        }
    ],
    expenseSummary: [
        {
            "expenseSummaryId": "5229a14b-443b-4551-9d01-4bc0dc820d05",
            "totalExpenses": 40749250.15,
            "date": "2022-08-23T23:59:13Z"
        },
        {
            "expenseSummaryId": "c17ff164-1ab4-41e7-91a8-8aab790dcd88",
            "totalExpenses": 82516685.25,
            "date": "2021-12-28T17:03:47Z"
        },
        {
            "expenseSummaryId": "45ecf33b-6c3b-4e55-84ec-fa30b88aa03f",
            "totalExpenses": 41860250.4,
            "date": "2021-09-18T23:26:30Z"
        },
        {
            "expenseSummaryId": "e495b850-cf2b-4b76-93c2-d4241c859cd0",
            "totalExpenses": 49456718.68,
            "date": "2022-01-08T04:26:56Z"
        },
        {
            "expenseSummaryId": "376f8d90-8b66-4cff-bd4e-2fcd14a42845",
            "totalExpenses": 35573786.54,
            "date": "2020-08-31T11:45:23Z"
        },
        {
            "expenseSummaryId": "744bb795-0f98-45cd-99ae-45dddb99c3e4",
            "totalExpenses": 43767088.74,
            "date": "2020-04-15T06:57:51Z"
        },
        {
            "expenseSummaryId": "4a6a10e5-4f44-4aef-a1bd-c57075f3c44f",
            "totalExpenses": 75311886.34,
            "date": "2021-11-05T16:10:48Z"
        },
        {
            "expenseSummaryId": "d62a1123-18b3-4784-bbdd-70a29f773f99",
            "totalExpenses": 25031430.77,
            "date": "2020-11-18T23:52:46Z"
        },
        {
            "expenseSummaryId": "ace2b05e-31de-48bd-a179-e59d16757456",
            "totalExpenses": 95066201.16,
            "date": "2020-05-10T17:55:37Z"
        },
        {
            "expenseSummaryId": "f24f6dd9-dd18-42f9-a76a-95d8198b7636",
            "totalExpenses": 43519955.41,
            "date": "2022-02-18T23:26:53Z"
        },
        {
            "expenseSummaryId": "2a2a88f0-0148-4667-8bab-7d129586bdf7",
            "totalExpenses": 11975718.82,
            "date": "2022-01-10T03:25:06Z"
        },
        {
            "expenseSummaryId": "560c166c-7093-4583-a007-5af2a88f1dab",
            "totalExpenses": 51372909.22,
            "date": "2022-04-24T18:53:13Z"
        },
        {
            "expenseSummaryId": "6faadd8d-5cdd-4b35-a3e8-cb0ada67de3a",
            "totalExpenses": 74722976.97,
            "date": "2022-01-14T09:36:38Z"
        },
        {
            "expenseSummaryId": "be4755fd-0f7c-4292-a0ad-539ad1371f6e",
            "totalExpenses": 75641467.74,
            "date": "2021-12-21T15:01:09Z"
        },
        {
            "expenseSummaryId": "46a33080-d239-49b2-9f0a-5d2d576a3966",
            "totalExpenses": 25500681.97,
            "date": "2022-04-01T15:50:39Z"
        },
        {
            "expenseSummaryId": "40dd45c1-b575-48d1-b1a0-2bf474c8b591",
            "totalExpenses": 539510.64,
            "date": "2020-01-13T13:28:34Z"
        },
        {
            "expenseSummaryId": "4d452c32-21fd-4891-a5fe-aa481861e0ad",
            "totalExpenses": 39145989.15,
            "date": "2022-04-13T22:53:06Z"
        },
        {
            "expenseSummaryId": "acd41481-9384-4ff1-8004-a3df027a0209",
            "totalExpenses": 21149322.36,
            "date": "2022-03-11T04:03:13Z"
        },
        {
            "expenseSummaryId": "9b523e04-fdae-4b0b-a6d9-58ef64c75431",
            "totalExpenses": 11169032.82,
            "date": "2021-08-06T01:20:04Z"
        },
        {
            "expenseSummaryId": "4ada8077-3799-4690-ae35-c552e4100b1a",
            "totalExpenses": 82993070.31,
            "date": "2021-08-03T10:58:02Z"
        },
        {
            "expenseSummaryId": "f6041c02-7b2a-4de3-8aed-81b82528ffe4",
            "totalExpenses": 66908936.55,
            "date": "2020-08-05T18:45:02Z"
        },
        {
            "expenseSummaryId": "d68b89d4-3332-4e29-8e5a-3c0483af6688",
            "totalExpenses": 33514872.87,
            "date": "2021-07-01T15:13:37Z"
        },
        {
            "expenseSummaryId": "9ef8296f-f2b3-4733-8664-7ef5e388734b",
            "totalExpenses": 63157720.91,
            "date": "2020-04-20T11:27:14Z"
        },
        {
            "expenseSummaryId": "c9a46c10-c426-4cbe-b805-83ab5d963e19",
            "totalExpenses": 58355575.44,
            "date": "2022-02-17T22:27:44Z"
        },
        {
            "expenseSummaryId": "8f70eaa2-fb78-4b32-bf2f-67c1e4988d2f",
            "totalExpenses": 84500652.59,
            "date": "2021-01-14T21:41:26Z"
        },
        {
            "expenseSummaryId": "f222583a-d003-44e1-920d-0f9743a873dc",
            "totalExpenses": 83208591.41,
            "date": "2021-05-23T02:25:54Z"
        },
        {
            "expenseSummaryId": "0675c624-1e11-4df8-821f-9a2d744dba09",
            "totalExpenses": 33465485.39,
            "date": "2022-10-29T12:01:44Z"
        },
        {
            "expenseSummaryId": "abe1d0e1-65bf-49dc-801d-ba669aae8e33",
            "totalExpenses": 27097402.85,
            "date": "2021-01-02T11:54:11Z"
        },
        {
            "expenseSummaryId": "6aef1c35-a1c4-4a58-9be0-b6488a622eaa",
            "totalExpenses": 60148771.5,
            "date": "2021-11-24T13:21:00Z"
        },
        {
            "expenseSummaryId": "43b606a2-45c6-4da4-85aa-f219aa6a2960",
            "totalExpenses": 39634053.67,
            "date": "2021-01-30T15:52:39Z"
        },
        {
            "expenseSummaryId": "db5b8de2-7dc0-4efe-a937-34e537a3f8ec",
            "totalExpenses": 63931774.54,
            "date": "2021-10-05T02:05:46Z"
        },
        {
            "expenseSummaryId": "b0760c67-c326-4f6d-9511-cb2b6896a11f",
            "totalExpenses": 61688809.89,
            "date": "2022-07-02T22:34:16Z"
        },
        {
            "expenseSummaryId": "8404fc43-72be-4a3a-bf55-313256b0e083",
            "totalExpenses": 70074829.75,
            "date": "2022-09-20T00:25:06Z"
        },
        {
            "expenseSummaryId": "b149ef3b-f9cc-4560-ab29-4f74ec138c71",
            "totalExpenses": 80265893.3,
            "date": "2022-12-21T05:58:49Z"
        },
        {
            "expenseSummaryId": "7e793e60-2edc-4adf-9d6f-bb6d09c93481",
            "totalExpenses": 10938282.95,
            "date": "2021-11-01T20:28:10Z"
        },
        {
            "expenseSummaryId": "e56345be-2ac9-4ca7-a9a2-1c59846381f7",
            "totalExpenses": 33591951.95,
            "date": "2021-11-23T16:52:43Z"
        },
        {
            "expenseSummaryId": "cdfd8bfd-1851-4cd1-ab5f-e66e7260ba92",
            "totalExpenses": 845358.59,
            "date": "2022-11-22T12:43:41Z"
        },
        {
            "expenseSummaryId": "eb8f9ea8-2cdb-4461-80fc-9dd571afb200",
            "totalExpenses": 66690967.68,
            "date": "2022-02-13T23:10:27Z"
        },
        {
            "expenseSummaryId": "1fe8f10b-24d0-4906-a66c-96ff7783671b",
            "totalExpenses": 43874777.57,
            "date": "2022-08-14T20:45:25Z"
        },
        {
            "expenseSummaryId": "6cd41a74-4084-4e91-b009-5ab41730d258",
            "totalExpenses": 40265520.46,
            "date": "2022-07-16T21:42:02Z"
        },
        {
            "expenseSummaryId": "d953877c-72d8-4189-8078-6ed4e46a23a4",
            "totalExpenses": 50581576.01,
            "date": "2020-07-23T13:00:44Z"
        },
        {
            "expenseSummaryId": "e328c686-7e18-41b3-92e2-e2ddaf3a4a31",
            "totalExpenses": 68186405.58,
            "date": "2021-03-10T22:55:10Z"
        },
        {
            "expenseSummaryId": "becde53e-60b5-40d1-be9c-27763057f3ac",
            "totalExpenses": 71676578.77,
            "date": "2022-10-17T04:27:37Z"
        },
        {
            "expenseSummaryId": "803d384f-69a9-450d-8ed3-96d202dbafcd",
            "totalExpenses": 44651450.2,
            "date": "2020-08-08T19:52:19Z"
        },
        {
            "expenseSummaryId": "4749833f-3eaa-452f-bb28-209988f7918d",
            "totalExpenses": 98571536.55,
            "date": "2022-06-18T07:04:03Z"
        },
        {
            "expenseSummaryId": "852af507-0551-41c8-9d95-a90ed9b1a07c",
            "totalExpenses": 31396413.25,
            "date": "2021-09-18T17:44:00Z"
        },
        {
            "expenseSummaryId": "45718dc4-41ef-4a92-b270-3f7eb445fbef",
            "totalExpenses": 30345484.18,
            "date": "2021-01-18T21:57:02Z"
        },
        {
            "expenseSummaryId": "5763fb5e-a9b1-41a7-b873-0ecfad5c749c",
            "totalExpenses": 78841883.13,
            "date": "2021-01-10T19:15:27Z"
        },
        {
            "expenseSummaryId": "87122213-3ad3-418a-8914-5a35e01bb69b",
            "totalExpenses": 1718619.1,
            "date": "2021-09-26T12:13:08Z"
        },
        {
            "expenseSummaryId": "10ec2f80-6da0-4909-b8fd-7c5cfdb7bef4",
            "totalExpenses": 97167385.15,
            "date": "2020-03-04T02:21:16Z"
        }
    ],
    sales: [
        {
            "saleId": "df8a03fa-c69c-4ffe-9e28-5febfb7a5ca9",
            "productId": "d35623ee-bef6-42b2-8776-2f99f8bb4782",
            "timestamp": "2023-11-02T04:03:00Z",
            "quantity": 229,
            "unitPrice": 221.1,
            "totalAmount": 8012.55
        },
        {
            "saleId": "8d008094-bbb7-4b6f-a38c-0e2a9905322d",
            "productId": "8ac1ac77-7358-425e-be16-0bdde9f02e59",
            "timestamp": "2023-08-17T19:53:36Z",
            "quantity": 241,
            "unitPrice": 414.68,
            "totalAmount": 5661.25
        },
        {
            "saleId": "4fca2797-3e88-40c5-88d3-fd4df8744958",
            "productId": "1afc136b-4d9f-4e8e-aace-8e1df908a404",
            "timestamp": "2023-11-21T15:03:18Z",
            "quantity": 699,
            "unitPrice": 550.22,
            "totalAmount": 4708.54
        },
        {
            "saleId": "ae6a3d09-fdf8-407b-9e55-07a347c87efa",
            "productId": "af84cc12-4fea-4f58-aece-f2ce92ca9580",
            "timestamp": "2023-05-17T20:20:03Z",
            "quantity": 182,
            "unitPrice": 113.69,
            "totalAmount": 9419.4
        },
        {
            "saleId": "f4dced2f-4446-450b-9778-fd32fe4dc583",
            "productId": "86e3bb1c-2f5d-4774-98f3-4df7cddd0a0f",
            "timestamp": "2023-06-14T15:17:34Z",
            "quantity": 863,
            "unitPrice": 214.01,
            "totalAmount": 8942.2
        },
        {
            "saleId": "b9c0856c-d10f-47a1-bf05-2f2c400aff69",
            "productId": "26b017c6-06d8-443f-9b4a-d6b1cee6f4c0",
            "timestamp": "2023-10-27T18:59:51Z",
            "quantity": 985,
            "unitPrice": 506.74,
            "totalAmount": 1790.08
        },
        {
            "saleId": "4411942c-1d3e-42b1-89bd-a692c43185b4",
            "productId": "440c9e80-6bf8-4eb3-b2d2-f81936d67de3",
            "timestamp": "2023-06-17T19:16:31Z",
            "quantity": 607,
            "unitPrice": 100.77,
            "totalAmount": 3293.73
        },
        {
            "saleId": "85460f0a-83d5-45b5-8db0-42506e0c5739",
            "productId": "98255f4e-40a6-470f-89a5-0792729f8947",
            "timestamp": "2024-01-12T16:37:28Z",
            "quantity": 93,
            "unitPrice": 310.09,
            "totalAmount": 5531.81
        },
        {
            "saleId": "1d9c4316-ed1a-49c5-a9ed-71a9fc8aff1c",
            "productId": "2a339fb2-f9f3-43bc-a85a-b217a0a38f12",
            "timestamp": "2023-11-08T18:16:52Z",
            "quantity": 482,
            "unitPrice": 83.62,
            "totalAmount": 894.41
        },
        {
            "saleId": "94a6ad98-8efe-4aef-bf19-742a542cf790",
            "productId": "8a8391b2-b4ac-4847-b652-66ffd8d65875",
            "timestamp": "2023-12-21T22:49:11Z",
            "quantity": 285,
            "unitPrice": 76.09,
            "totalAmount": 3738.87
        },
        {
            "saleId": "cff83ef4-6b2c-4ad4-b550-929e0eb3fa93",
            "productId": "be2157fb-7454-405e-9511-bf7ba81b7726",
            "timestamp": "2023-11-21T15:03:43Z",
            "quantity": 219,
            "unitPrice": 606.43,
            "totalAmount": 8773.57
        },
        {
            "saleId": "bc6fbde5-325d-4918-b8d9-36d8a7be769f",
            "productId": "fdf1ba3d-fa06-4ce5-90ff-d081c5d37176",
            "timestamp": "2024-03-01T17:35:27Z",
            "quantity": 286,
            "unitPrice": 246.58,
            "totalAmount": 3328.18
        },
        {
            "saleId": "022fe7a7-3938-4f41-9f56-f9e0a797f00f",
            "productId": "afded6df-058f-477d-9878-e0e0b1d3dff3",
            "timestamp": "2023-06-27T12:09:45Z",
            "quantity": 107,
            "unitPrice": 891.26,
            "totalAmount": 3915.37
        },
        {
            "saleId": "e6fc26ef-50e8-4983-a7e0-f2cbf32d32ef",
            "productId": "daa29167-82a7-474b-9687-b8b903e7ec69",
            "timestamp": "2023-07-06T02:50:19Z",
            "quantity": 195,
            "unitPrice": 809.59,
            "totalAmount": 725.11
        },
        {
            "saleId": "5ab2a0f1-2248-4804-9bf0-219d8a30b076",
            "productId": "ccb83982-71f3-4497-bad8-7e64c6920dc6",
            "timestamp": "2023-03-18T01:14:42Z",
            "quantity": 339,
            "unitPrice": 662.74,
            "totalAmount": 3694.96
        },
        {
            "saleId": "a3659c0d-ccc6-4903-b035-6f13e7778253",
            "productId": "1936d406-e89e-40e4-bff7-1827532269d4",
            "timestamp": "2023-11-05T00:17:48Z",
            "quantity": 71,
            "unitPrice": 529.95,
            "totalAmount": 2535.36
        },
        {
            "saleId": "169eacd5-c2e3-4510-a102-12d4b8351401",
            "productId": "c849a535-5f8b-47e3-889c-015693a644ac",
            "timestamp": "2023-11-03T18:34:59Z",
            "quantity": 235,
            "unitPrice": 769.19,
            "totalAmount": 7007.95
        },
        {
            "saleId": "a2241026-9fbb-438d-8f74-186bfa7c3174",
            "productId": "0c3e80ee-59b3-4fc4-b760-8b07acc2d3ae",
            "timestamp": "2024-01-04T00:19:37Z",
            "quantity": 489,
            "unitPrice": 965.72,
            "totalAmount": 8759.91
        },
        {
            "saleId": "6e1ef31f-9990-43d3-a8ba-54f535d450e9",
            "productId": "d8f5bee3-f3eb-4071-a124-6b857e0fd798",
            "timestamp": "2023-07-29T03:12:53Z",
            "quantity": 967,
            "unitPrice": 486.31,
            "totalAmount": 3167.8
        },
        {
            "saleId": "ec369281-eefe-4a41-bcfc-f1f003ab8144",
            "productId": "8d15de86-0e4a-4414-9166-7a33610202d3",
            "timestamp": "2023-06-16T03:56:50Z",
            "quantity": 371,
            "unitPrice": 413.88,
            "totalAmount": 668.91
        },
        {
            "saleId": "7f455867-3226-43c8-9838-091356e52573",
            "productId": "ea8fd0b9-c2d9-4d43-9c23-44cb99d079bb",
            "timestamp": "2023-12-03T20:33:41Z",
            "quantity": 435,
            "unitPrice": 477.74,
            "totalAmount": 9592.66
        },
        {
            "saleId": "a3ee350e-5dee-4ce3-831f-710da0067756",
            "productId": "25d01c80-bca1-4a00-b1d0-0fbd39ff9e89",
            "timestamp": "2023-12-27T16:34:21Z",
            "quantity": 699,
            "unitPrice": 336.99,
            "totalAmount": 8316.35
        },
        {
            "saleId": "c535a63e-376a-404e-b81e-4b448a06ac0e",
            "productId": "1d6df6e3-b7ea-4507-9d66-87c6ee8ed5b9",
            "timestamp": "2024-03-14T02:16:17Z",
            "quantity": 540,
            "unitPrice": 656.63,
            "totalAmount": 9777.17
        },
        {
            "saleId": "b7d157e1-0931-4ebe-8ca3-571cee3b597c",
            "productId": "000a8c23-5bca-436c-a216-4e747a94c511",
            "timestamp": "2024-02-13T07:28:00Z",
            "quantity": 884,
            "unitPrice": 899.96,
            "totalAmount": 579.95
        },
        {
            "saleId": "04ec2c14-ee2f-4485-9946-b154ed2df29a",
            "productId": "c5b600dc-6bfb-492a-b335-c3cc8c707959",
            "timestamp": "2023-09-04T23:51:27Z",
            "quantity": 106,
            "unitPrice": 272.72,
            "totalAmount": 8699.14
        },
        {
            "saleId": "ca9f6794-b55e-4fb6-b76e-2e2e4d79d8f8",
            "productId": "9d5fafbc-312b-47e8-ada1-283918f0c3b5",
            "timestamp": "2023-06-27T17:57:01Z",
            "quantity": 543,
            "unitPrice": 15.84,
            "totalAmount": 304.87
        },
        {
            "saleId": "2fc702a0-8959-4794-9847-c99da26a83c2",
            "productId": "0114d5d4-ae48-46fa-b0ca-afe60eb88add",
            "timestamp": "2023-03-27T00:06:48Z",
            "quantity": 262,
            "unitPrice": 838.85,
            "totalAmount": 5265.29
        },
        {
            "saleId": "4d7f8590-2db0-4e05-9215-a5225eb99c1d",
            "productId": "e5b0da8c-148d-4680-b262-8609fb8a10da",
            "timestamp": "2023-09-25T03:45:29Z",
            "quantity": 485,
            "unitPrice": 268.43,
            "totalAmount": 5710.52
        },
        {
            "saleId": "b3fb5092-8991-4f6d-8b01-05cc2fe624e5",
            "productId": "2be5b024-2c96-4f29-912c-c6f36353f799",
            "timestamp": "2023-04-01T01:39:53Z",
            "quantity": 561,
            "unitPrice": 783.41,
            "totalAmount": 8189.57
        },
        {
            "saleId": "877c1b5b-d3d5-4f92-b640-f1d74e2207cd",
            "productId": "fcf2e432-62a3-4b6f-a34d-36e42a12272e",
            "timestamp": "2023-07-10T13:42:52Z",
            "quantity": 333,
            "unitPrice": 491.06,
            "totalAmount": 6152.84
        },
        {
            "saleId": "58de1711-bf0c-4a7e-9045-06e8dae2fb20",
            "productId": "fc4c81e5-f1ac-40f5-8c6f-da3fbad5599d",
            "timestamp": "2023-09-06T15:15:47Z",
            "quantity": 949,
            "unitPrice": 120.98,
            "totalAmount": 8873.08
        },
        {
            "saleId": "ee74af3c-ef81-45d2-a6e6-d883ff816992",
            "productId": "07238d8e-0037-4972-87ca-0df206ee3e42",
            "timestamp": "2024-03-05T13:54:29Z",
            "quantity": 2,
            "unitPrice": 234.17,
            "totalAmount": 7048.43
        },
        {
            "saleId": "9c7317c6-39fa-4ab6-adb0-cde1a11c2f47",
            "productId": "154b7860-23a2-4564-ad99-1745ab7122ef",
            "timestamp": "2023-03-22T06:46:16Z",
            "quantity": 292,
            "unitPrice": 707.73,
            "totalAmount": 2045.56
        },
        {
            "saleId": "5d5b341f-82c6-439a-8d59-44b38733cb7a",
            "productId": "8d4bf814-65d4-4df4-84cc-68911d925fdf",
            "timestamp": "2023-06-12T18:25:57Z",
            "quantity": 675,
            "unitPrice": 243.48,
            "totalAmount": 9259.03
        },
        {
            "saleId": "d47eb898-5413-4492-ac54-cebb2422ebcf",
            "productId": "a52bf1bd-3d35-4cd2-849a-354e3952e2d2",
            "timestamp": "2023-11-21T03:27:09Z",
            "quantity": 7,
            "unitPrice": 44.74,
            "totalAmount": 9210.79
        },
        {
            "saleId": "01ca19c0-c93a-464c-bc54-a14e9e80c55c",
            "productId": "d35623ee-bef6-42b2-8776-2f99f8bb4782",
            "timestamp": "2024-01-17T01:48:30Z",
            "quantity": 659,
            "unitPrice": 497.62,
            "totalAmount": 6661.77
        },
        {
            "saleId": "9c03ee38-1424-4d47-bf27-4ad1441e0391",
            "productId": "8ac1ac77-7358-425e-be16-0bdde9f02e59",
            "timestamp": "2024-02-28T00:43:12Z",
            "quantity": 818,
            "unitPrice": 685.08,
            "totalAmount": 8503.33
        },
        {
            "saleId": "55880ad4-1b25-4c67-a21a-9c2e480752af",
            "productId": "1afc136b-4d9f-4e8e-aace-8e1df908a404",
            "timestamp": "2023-09-05T17:54:43Z",
            "quantity": 578,
            "unitPrice": 817.99,
            "totalAmount": 1584.0
        },
        {
            "saleId": "76515f08-ff03-46a5-8435-af7345ff9bab",
            "productId": "af84cc12-4fea-4f58-aece-f2ce92ca9580",
            "timestamp": "2023-08-19T00:33:46Z",
            "quantity": 491,
            "unitPrice": 801.15,
            "totalAmount": 3758.2
        },
        {
            "saleId": "b84d883b-348a-4ea2-9f3b-7e9c6e841634",
            "productId": "86e3bb1c-2f5d-4774-98f3-4df7cddd0a0f",
            "timestamp": "2023-12-27T23:17:04Z",
            "quantity": 281,
            "unitPrice": 317.09,
            "totalAmount": 6151.55
        },
        {
            "saleId": "2be4ca15-1cfb-4b06-a87a-3494b02dacab",
            "productId": "26b017c6-06d8-443f-9b4a-d6b1cee6f4c0",
            "timestamp": "2023-11-18T12:30:37Z",
            "quantity": 666,
            "unitPrice": 690.3,
            "totalAmount": 1522.01
        },
        {
            "saleId": "3e1685c3-b8d1-49ac-8f00-15fb7f4e1a3d",
            "productId": "440c9e80-6bf8-4eb3-b2d2-f81936d67de3",
            "timestamp": "2024-01-22T17:28:27Z",
            "quantity": 113,
            "unitPrice": 54.35,
            "totalAmount": 8803.88
        },
        {
            "saleId": "446fca08-cdec-43c3-afe8-2c9b82016062",
            "productId": "98255f4e-40a6-470f-89a5-0792729f8947",
            "timestamp": "2023-03-29T14:37:25Z",
            "quantity": 574,
            "unitPrice": 605.86,
            "totalAmount": 749.81
        },
        {
            "saleId": "b84043c2-e60a-4c2f-9a10-6a56cedbb2a9",
            "productId": "2a339fb2-f9f3-43bc-a85a-b217a0a38f12",
            "timestamp": "2023-10-04T08:22:42Z",
            "quantity": 26,
            "unitPrice": 438.25,
            "totalAmount": 9407.62
        },
        {
            "saleId": "ca781bd3-fa61-4f5b-bdc2-3053531a9d2f",
            "productId": "8a8391b2-b4ac-4847-b652-66ffd8d65875",
            "timestamp": "2024-02-12T03:24:52Z",
            "quantity": 452,
            "unitPrice": 511.0,
            "totalAmount": 8734.61
        },
        {
            "saleId": "caa5f9b6-1458-4754-b0d1-19adebd562cf",
            "productId": "be2157fb-7454-405e-9511-bf7ba81b7726",
            "timestamp": "2023-12-25T10:27:27Z",
            "quantity": 484,
            "unitPrice": 280.73,
            "totalAmount": 5679.77
        },
        {
            "saleId": "36a183a7-7abb-4f74-938b-b21801aa4c22",
            "productId": "fdf1ba3d-fa06-4ce5-90ff-d081c5d37176",
            "timestamp": "2023-08-16T06:01:27Z",
            "quantity": 260,
            "unitPrice": 232.89,
            "totalAmount": 3765.82
        },
        {
            "saleId": "d62aaec8-35f2-44f2-ba46-5f024ddcb1c3",
            "productId": "afded6df-058f-477d-9878-e0e0b1d3dff3",
            "timestamp": "2023-10-02T16:42:02Z",
            "quantity": 718,
            "unitPrice": 685.31,
            "totalAmount": 6321.19
        },
        {
            "saleId": "253c02a9-decd-4d11-bf40-9cf6d8c12562",
            "productId": "daa29167-82a7-474b-9687-b8b903e7ec69",
            "timestamp": "2023-06-10T02:42:28Z",
            "quantity": 297,
            "unitPrice": 953.45,
            "totalAmount": 2757.43
        },
        {
            "saleId": "204bf1e8-c1ec-4c28-b209-4b3485983956",
            "productId": "ccb83982-71f3-4497-bad8-7e64c6920dc6",
            "timestamp": "2023-07-16T21:58:15Z",
            "quantity": 447,
            "unitPrice": 777.27,
            "totalAmount": 4574.02
        },
        {
            "saleId": "8f2cc66d-1cee-4bdb-8d71-124f27c5de48",
            "productId": "1936d406-e89e-40e4-bff7-1827532269d4",
            "timestamp": "2023-06-17T10:37:35Z",
            "quantity": 390,
            "unitPrice": 855.29,
            "totalAmount": 4044.96
        },
        {
            "saleId": "3a28dbfa-758c-4f0f-a086-0b04e7dd94a7",
            "productId": "c849a535-5f8b-47e3-889c-015693a644ac",
            "timestamp": "2024-01-31T06:04:28Z",
            "quantity": 851,
            "unitPrice": 170.23,
            "totalAmount": 9399.42
        },
        {
            "saleId": "12bd3ad4-b486-4515-9192-c2c2a33f97ff",
            "productId": "0c3e80ee-59b3-4fc4-b760-8b07acc2d3ae",
            "timestamp": "2023-05-03T13:57:12Z",
            "quantity": 882,
            "unitPrice": 973.95,
            "totalAmount": 4241.28
        },
        {
            "saleId": "d4fcfc21-9191-4419-a18d-a15282881274",
            "productId": "d8f5bee3-f3eb-4071-a124-6b857e0fd798",
            "timestamp": "2023-10-22T01:09:46Z",
            "quantity": 830,
            "unitPrice": 200.27,
            "totalAmount": 3059.84
        },
        {
            "saleId": "00680af4-e08f-4360-bcb0-e5702edec5f9",
            "productId": "8d15de86-0e4a-4414-9166-7a33610202d3",
            "timestamp": "2023-05-09T15:02:48Z",
            "quantity": 414,
            "unitPrice": 924.09,
            "totalAmount": 8604.22
        },
        {
            "saleId": "86b7e33b-e09e-4cdd-ac75-ad2d563936d9",
            "productId": "ea8fd0b9-c2d9-4d43-9c23-44cb99d079bb",
            "timestamp": "2023-03-23T16:14:23Z",
            "quantity": 390,
            "unitPrice": 792.89,
            "totalAmount": 6503.0
        },
        {
            "saleId": "baf92b24-73f7-45f8-8326-80c7d151472e",
            "productId": "25d01c80-bca1-4a00-b1d0-0fbd39ff9e89",
            "timestamp": "2024-02-22T07:16:30Z",
            "quantity": 391,
            "unitPrice": 685.29,
            "totalAmount": 9900.96
        },
        {
            "saleId": "dc8df228-0241-4cc0-95ee-3b5eda831524",
            "productId": "1d6df6e3-b7ea-4507-9d66-87c6ee8ed5b9",
            "timestamp": "2023-05-04T23:00:53Z",
            "quantity": 309,
            "unitPrice": 639.66,
            "totalAmount": 9964.61
        },
        {
            "saleId": "201e23c6-6ddc-4dc9-8e39-b6fb81404fcf",
            "productId": "000a8c23-5bca-436c-a216-4e747a94c511",
            "timestamp": "2023-08-23T17:23:35Z",
            "quantity": 325,
            "unitPrice": 471.59,
            "totalAmount": 7706.41
        },
        {
            "saleId": "603586d5-2f86-4c3e-9acf-cdffd433f702",
            "productId": "c5b600dc-6bfb-492a-b335-c3cc8c707959",
            "timestamp": "2024-02-22T06:16:55Z",
            "quantity": 857,
            "unitPrice": 197.36,
            "totalAmount": 760.65
        },
        {
            "saleId": "5253cf24-44e6-4f86-8abe-d827a088ee9b",
            "productId": "9d5fafbc-312b-47e8-ada1-283918f0c3b5",
            "timestamp": "2023-12-15T21:21:09Z",
            "quantity": 25,
            "unitPrice": 158.12,
            "totalAmount": 243.15
        },
        {
            "saleId": "31de695e-9c3d-433b-a5d5-3af401d2763e",
            "productId": "0114d5d4-ae48-46fa-b0ca-afe60eb88add",
            "timestamp": "2024-02-06T13:55:02Z",
            "quantity": 757,
            "unitPrice": 283.2,
            "totalAmount": 7420.27
        },
        {
            "saleId": "beffcc21-4fa2-4abf-9ddf-03a68651f751",
            "productId": "e5b0da8c-148d-4680-b262-8609fb8a10da",
            "timestamp": "2023-05-20T14:26:19Z",
            "quantity": 580,
            "unitPrice": 659.75,
            "totalAmount": 5018.42
        },
        {
            "saleId": "7c9389c3-87f0-454d-9ab3-f9c8fb28f082",
            "productId": "2be5b024-2c96-4f29-912c-c6f36353f799",
            "timestamp": "2023-07-01T04:46:47Z",
            "quantity": 948,
            "unitPrice": 620.57,
            "totalAmount": 7555.21
        },
        {
            "saleId": "ada3165e-5ce6-45b9-95d5-4665b223f221",
            "productId": "fcf2e432-62a3-4b6f-a34d-36e42a12272e",
            "timestamp": "2023-03-25T13:26:56Z",
            "quantity": 960,
            "unitPrice": 989.43,
            "totalAmount": 1188.7
        },
        {
            "saleId": "e8829f25-7ce4-44cd-bab9-277e1d2d170c",
            "productId": "fc4c81e5-f1ac-40f5-8c6f-da3fbad5599d",
            "timestamp": "2023-05-29T02:29:01Z",
            "quantity": 667,
            "unitPrice": 357.37,
            "totalAmount": 6196.09
        },
        {
            "saleId": "984b0d72-f6ea-49ac-960f-f4027d2ea67b",
            "productId": "07238d8e-0037-4972-87ca-0df206ee3e42",
            "timestamp": "2023-03-15T22:27:44Z",
            "quantity": 623,
            "unitPrice": 467.77,
            "totalAmount": 6657.9
        },
        {
            "saleId": "3027a79c-8583-4585-b618-a31344cb8acb",
            "productId": "154b7860-23a2-4564-ad99-1745ab7122ef",
            "timestamp": "2023-03-17T09:21:59Z",
            "quantity": 23,
            "unitPrice": 945.27,
            "totalAmount": 7870.76
        },
        {
            "saleId": "90f35bc0-3617-4cb6-9754-923c814991fd",
            "productId": "8d4bf814-65d4-4df4-84cc-68911d925fdf",
            "timestamp": "2024-01-29T09:24:28Z",
            "quantity": 140,
            "unitPrice": 664.0,
            "totalAmount": 7582.02
        },
        {
            "saleId": "5c86a794-9fac-4a1e-9c5a-01282a0b166e",
            "productId": "a52bf1bd-3d35-4cd2-849a-354e3952e2d2",
            "timestamp": "2023-05-25T21:06:21Z",
            "quantity": 127,
            "unitPrice": 185.81,
            "totalAmount": 4970.67
        },
        {
            "saleId": "ec033faa-a469-48d5-b5e1-108413f12d07",
            "productId": "d35623ee-bef6-42b2-8776-2f99f8bb4782",
            "timestamp": "2023-12-12T16:58:27Z",
            "quantity": 178,
            "unitPrice": 422.07,
            "totalAmount": 169.06
        },
        {
            "saleId": "0e8f8555-4af9-44a8-b32e-bc6d5d1b0de0",
            "productId": "8ac1ac77-7358-425e-be16-0bdde9f02e59",
            "timestamp": "2023-03-23T10:36:36Z",
            "quantity": 295,
            "unitPrice": 536.74,
            "totalAmount": 7652.54
        },
        {
            "saleId": "2ac5fd37-ad3e-4a22-b37b-70603a30d82e",
            "productId": "1afc136b-4d9f-4e8e-aace-8e1df908a404",
            "timestamp": "2023-08-28T07:08:56Z",
            "quantity": 338,
            "unitPrice": 304.83,
            "totalAmount": 137.98
        },
        {
            "saleId": "4ac03bce-3d3a-4d93-af99-9c7bc54e5168",
            "productId": "af84cc12-4fea-4f58-aece-f2ce92ca9580",
            "timestamp": "2024-02-15T09:35:47Z",
            "quantity": 65,
            "unitPrice": 951.61,
            "totalAmount": 7558.27
        },
        {
            "saleId": "e354821f-9808-487c-b466-3d3a1c7bc762",
            "productId": "86e3bb1c-2f5d-4774-98f3-4df7cddd0a0f",
            "timestamp": "2023-11-25T20:30:36Z",
            "quantity": 171,
            "unitPrice": 305.65,
            "totalAmount": 4647.58
        },
        {
            "saleId": "0ff9d397-db60-4281-8c51-73d6665003dd",
            "productId": "26b017c6-06d8-443f-9b4a-d6b1cee6f4c0",
            "timestamp": "2024-02-15T23:11:52Z",
            "quantity": 610,
            "unitPrice": 428.16,
            "totalAmount": 3294.23
        },
        {
            "saleId": "1a5873ef-8484-40b0-a9fd-d6c11e441e61",
            "productId": "440c9e80-6bf8-4eb3-b2d2-f81936d67de3",
            "timestamp": "2024-03-10T20:18:24Z",
            "quantity": 579,
            "unitPrice": 129.19,
            "totalAmount": 488.19
        },
        {
            "saleId": "d55ca8e1-ffff-439d-a55b-f0b9eb8f848e",
            "productId": "98255f4e-40a6-470f-89a5-0792729f8947",
            "timestamp": "2023-07-26T01:38:07Z",
            "quantity": 186,
            "unitPrice": 544.82,
            "totalAmount": 2989.5
        },
        {
            "saleId": "e90068e8-55c5-400d-a805-7dbab388138a",
            "productId": "2a339fb2-f9f3-43bc-a85a-b217a0a38f12",
            "timestamp": "2023-09-24T10:51:03Z",
            "quantity": 540,
            "unitPrice": 541.07,
            "totalAmount": 3861.48
        },
        {
            "saleId": "32eba028-2991-406a-90ca-600beb4f67db",
            "productId": "8a8391b2-b4ac-4847-b652-66ffd8d65875",
            "timestamp": "2023-06-29T10:24:41Z",
            "quantity": 661,
            "unitPrice": 78.07,
            "totalAmount": 2467.93
        },
        {
            "saleId": "7c17b19e-17ef-4d37-9233-6ad31bd85b23",
            "productId": "be2157fb-7454-405e-9511-bf7ba81b7726",
            "timestamp": "2023-12-02T12:10:55Z",
            "quantity": 635,
            "unitPrice": 52.5,
            "totalAmount": 4393.68
        },
        {
            "saleId": "729cfe78-6698-4a32-9c78-51ada37cfb36",
            "productId": "fdf1ba3d-fa06-4ce5-90ff-d081c5d37176",
            "timestamp": "2023-10-29T22:49:12Z",
            "quantity": 733,
            "unitPrice": 349.87,
            "totalAmount": 2736.72
        },
        {
            "saleId": "48afeac9-385d-4ff3-9e7f-0a6787ec1958",
            "productId": "afded6df-058f-477d-9878-e0e0b1d3dff3",
            "timestamp": "2023-11-07T08:57:27Z",
            "quantity": 268,
            "unitPrice": 700.99,
            "totalAmount": 7115.25
        },
        {
            "saleId": "0831a92f-4c18-4de6-a9d3-96ec3352603d",
            "productId": "daa29167-82a7-474b-9687-b8b903e7ec69",
            "timestamp": "2024-01-11T03:57:45Z",
            "quantity": 387,
            "unitPrice": 382.34,
            "totalAmount": 2575.24
        },
        {
            "saleId": "2888cfa2-b9ef-4e6d-8c62-014734591691",
            "productId": "ccb83982-71f3-4497-bad8-7e64c6920dc6",
            "timestamp": "2023-11-23T13:32:43Z",
            "quantity": 420,
            "unitPrice": 596.87,
            "totalAmount": 3294.5
        },
        {
            "saleId": "40bd92ec-084e-415e-ba4b-2d12d826ca36",
            "productId": "1936d406-e89e-40e4-bff7-1827532269d4",
            "timestamp": "2023-04-16T18:59:38Z",
            "quantity": 678,
            "unitPrice": 947.48,
            "totalAmount": 7363.69
        },
        {
            "saleId": "2ba6fdbb-81c8-4af2-8adb-0505033a3c98",
            "productId": "c849a535-5f8b-47e3-889c-015693a644ac",
            "timestamp": "2024-01-27T13:21:55Z",
            "quantity": 626,
            "unitPrice": 731.66,
            "totalAmount": 9487.24
        },
        {
            "saleId": "fc3006ad-f883-4f43-86ee-8c1a4f2c7248",
            "productId": "0c3e80ee-59b3-4fc4-b760-8b07acc2d3ae",
            "timestamp": "2023-11-02T09:32:22Z",
            "quantity": 732,
            "unitPrice": 366.09,
            "totalAmount": 4384.09
        },
        {
            "saleId": "8b6c8765-001c-4a54-91e2-761394f1a700",
            "productId": "d8f5bee3-f3eb-4071-a124-6b857e0fd798",
            "timestamp": "2023-04-21T22:19:20Z",
            "quantity": 368,
            "unitPrice": 37.27,
            "totalAmount": 5510.41
        },
        {
            "saleId": "b830c1e8-ed9a-4893-b6d2-68b87b991453",
            "productId": "8d15de86-0e4a-4414-9166-7a33610202d3",
            "timestamp": "2023-09-14T06:10:36Z",
            "quantity": 426,
            "unitPrice": 257.98,
            "totalAmount": 5241.93
        },
        {
            "saleId": "eeaa3b86-09ae-46aa-9b58-6354713c23cd",
            "productId": "ea8fd0b9-c2d9-4d43-9c23-44cb99d079bb",
            "timestamp": "2023-05-09T05:06:12Z",
            "quantity": 228,
            "unitPrice": 205.53,
            "totalAmount": 2448.67
        },
        {
            "saleId": "8579fa47-cd55-477e-9bc0-77f7975c91c6",
            "productId": "25d01c80-bca1-4a00-b1d0-0fbd39ff9e89",
            "timestamp": "2023-07-09T23:55:58Z",
            "quantity": 147,
            "unitPrice": 304.11,
            "totalAmount": 646.37
        },
        {
            "saleId": "d5436830-dc0a-4f7b-b96b-ca96c10f7b36",
            "productId": "1d6df6e3-b7ea-4507-9d66-87c6ee8ed5b9",
            "timestamp": "2023-06-25T14:57:39Z",
            "quantity": 700,
            "unitPrice": 574.25,
            "totalAmount": 6103.38
        },
        {
            "saleId": "477e5f5d-c44c-4f3a-b4c4-8a85924fe01b",
            "productId": "000a8c23-5bca-436c-a216-4e747a94c511",
            "timestamp": "2023-04-10T13:26:52Z",
            "quantity": 400,
            "unitPrice": 49.43,
            "totalAmount": 1860.5
        },
        {
            "saleId": "bfbe67c7-3d3b-471c-a999-d2ea8a9594d0",
            "productId": "c5b600dc-6bfb-492a-b335-c3cc8c707959",
            "timestamp": "2023-11-17T17:02:08Z",
            "quantity": 654,
            "unitPrice": 825.63,
            "totalAmount": 6998.87
        },
        {
            "saleId": "156a5c20-6338-41e2-b9ab-dbcb40905925",
            "productId": "9d5fafbc-312b-47e8-ada1-283918f0c3b5",
            "timestamp": "2023-03-20T16:53:47Z",
            "quantity": 125,
            "unitPrice": 237.24,
            "totalAmount": 6603.67
        },
        {
            "saleId": "6d4ab0ae-5d49-4731-b099-d8e155fb49d1",
            "productId": "0114d5d4-ae48-46fa-b0ca-afe60eb88add",
            "timestamp": "2023-06-14T08:48:03Z",
            "quantity": 677,
            "unitPrice": 479.94,
            "totalAmount": 7760.82
        },
        {
            "saleId": "81aa20f8-591f-47e6-8bad-7ad3e3003f81",
            "productId": "e5b0da8c-148d-4680-b262-8609fb8a10da",
            "timestamp": "2023-06-30T12:47:06Z",
            "quantity": 555,
            "unitPrice": 410.27,
            "totalAmount": 9330.17
        },
        {
            "saleId": "a93e6a0c-d178-4889-b2ae-ba0325d9051f",
            "productId": "2be5b024-2c96-4f29-912c-c6f36353f799",
            "timestamp": "2023-11-24T12:14:40Z",
            "quantity": 508,
            "unitPrice": 558.25,
            "totalAmount": 4006.69
        },
        {
            "saleId": "4a2575dd-8861-46ce-80ad-74f488d79a5a",
            "productId": "fcf2e432-62a3-4b6f-a34d-36e42a12272e",
            "timestamp": "2023-09-16T14:34:18Z",
            "quantity": 259,
            "unitPrice": 368.39,
            "totalAmount": 5611.94
        }
    ],
    salesSummary: [
        {
            "salesSummaryId": "9234a776-e6ac-46e2-bc24-c959ce216751",
            "totalValue": 4754106.83,
            "changePercentage": 61.51,
            "date": "2023-03-18T22:32:25Z"
        },
        {
            "salesSummaryId": "e5648831-7d0e-4ef5-8e04-f6e6a0eaafb1",
            "totalValue": 1512948.97,
            "changePercentage": -2.28,
            "date": "2023-09-03T13:50:20Z"
        },
        {
            "salesSummaryId": "785d33be-a1d8-47a6-b1d3-779942196b5c",
            "totalValue": 5545737.54,
            "changePercentage": -55.29,
            "date": "2023-07-28T13:16:27Z"
        },
        {
            "salesSummaryId": "0541d262-46aa-4961-b7c0-ce09143ccf34",
            "totalValue": 3260113.92,
            "changePercentage": -71.7,
            "date": "2023-05-16T08:32:38Z"
        },
        {
            "salesSummaryId": "185bb7e9-a9c0-4691-87d3-ca597a29e4d8",
            "totalValue": 849737.25,
            "changePercentage": 9.16,
            "date": "2023-08-26T05:41:40Z"
        },
        {
            "salesSummaryId": "6a1cb0f7-a4e1-4157-800d-86a59fb5fc16",
            "totalValue": 98903.57,
            "changePercentage": 36.24,
            "date": "2023-09-02T01:49:46Z"
        },
        {
            "salesSummaryId": "7d6d3e60-4687-40e3-9a77-452ea298df02",
            "totalValue": 973557.25,
            "changePercentage": 34.22,
            "date": "2023-03-31T15:20:53Z"
        },
        {
            "salesSummaryId": "7e071f0f-cff2-4699-bc67-3bee1114cb9e",
            "totalValue": 9761085.56,
            "changePercentage": -57.32,
            "date": "2023-06-25T12:21:04Z"
        },
        {
            "salesSummaryId": "6688c13c-758a-44c9-a291-d630d13dfd33",
            "totalValue": 9819343.72,
            "changePercentage": -49.57,
            "date": "2023-06-21T17:57:01Z"
        },
        {
            "salesSummaryId": "bce35149-3c37-4a0d-8963-c9f550b262f3",
            "totalValue": 2757578.95,
            "changePercentage": 73.95,
            "date": "2023-05-13T15:02:46Z"
        },
        {
            "salesSummaryId": "4d86c2df-d759-49df-9ecd-1eaf27a3d590",
            "totalValue": 8894817.67,
            "changePercentage": -25.81,
            "date": "2023-03-31T16:04:25Z"
        },
        {
            "salesSummaryId": "c85efa84-d294-4c2e-a9a5-8774d92af8bf",
            "totalValue": 2882180.14,
            "changePercentage": 57.29,
            "date": "2024-03-13T01:19:11Z"
        },
        {
            "salesSummaryId": "9257a2eb-d1ba-4cde-a0c2-cdf766c8c79c",
            "totalValue": 543716.99,
            "changePercentage": 8.85,
            "date": "2024-02-04T05:14:46Z"
        },
        {
            "salesSummaryId": "2f94d909-0f3a-45fb-8072-5054b6dba2d6",
            "totalValue": 1171786.52,
            "changePercentage": 79.4,
            "date": "2023-04-20T00:12:05Z"
        },
        {
            "salesSummaryId": "9bc6eca5-9f18-4e72-bed0-7a98bb759af3",
            "totalValue": 9574424.72,
            "changePercentage": 10.42,
            "date": "2023-04-04T22:57:17Z"
        },
        {
            "salesSummaryId": "a0979a0f-bbe2-4bd8-9639-e6c1d890c6e1",
            "totalValue": 1717855.75,
            "changePercentage": -76.77,
            "date": "2023-07-24T23:01:04Z"
        },
        {
            "salesSummaryId": "d2ff270c-63d9-4510-9524-91cb95494a9d",
            "totalValue": 1328587.6,
            "changePercentage": 62.35,
            "date": "2023-12-30T03:52:12Z"
        },
        {
            "salesSummaryId": "56693648-d829-4d6a-8ff1-379ed00187c0",
            "totalValue": 3363438.49,
            "changePercentage": -3.73,
            "date": "2023-06-16T12:55:40Z"
        },
        {
            "salesSummaryId": "22c58913-c4ad-44ac-bcf0-6309b6c61f26",
            "totalValue": 6253195.27,
            "changePercentage": -33.39,
            "date": "2023-05-12T13:22:28Z"
        },
        {
            "salesSummaryId": "e14f2cdc-28c8-4041-a5c3-444e32f4df96",
            "totalValue": 759235.03,
            "changePercentage": -70.16,
            "date": "2023-05-04T03:54:06Z"
        },
        {
            "salesSummaryId": "abb07538-994f-40df-9850-b93d758566d6",
            "totalValue": 8849902.08,
            "changePercentage": 49.99,
            "date": "2023-10-23T10:52:58Z"
        },
        {
            "salesSummaryId": "3c1be92e-86a4-4ba9-9cc4-0cd25cdd9b53",
            "totalValue": 6985354.53,
            "changePercentage": -45.28,
            "date": "2023-06-12T08:59:54Z"
        },
        {
            "salesSummaryId": "b6438519-cd43-49e4-a6ea-c1e97b6b9f4f",
            "totalValue": 1977818.88,
            "changePercentage": -1.73,
            "date": "2023-07-30T18:47:25Z"
        },
        {
            "salesSummaryId": "47d22ba7-a75b-4570-a0ee-5936af301dc0",
            "totalValue": 3051711.61,
            "changePercentage": 46.06,
            "date": "2023-06-21T19:26:53Z"
        },
        {
            "salesSummaryId": "75bf9bb7-67bf-4674-8d57-ef96c387bd5f",
            "totalValue": 1776483.92,
            "changePercentage": 5.92,
            "date": "2024-01-04T23:05:09Z"
        },
        {
            "salesSummaryId": "aa076cf0-2af4-42d1-a65a-e21048900cdc",
            "totalValue": 8008789.18,
            "changePercentage": -92.62,
            "date": "2023-07-11T05:46:12Z"
        },
        {
            "salesSummaryId": "0eabb55c-311b-4794-8621-684b8e3c6af3",
            "totalValue": 9939857.2,
            "changePercentage": 43.61,
            "date": "2023-11-03T17:55:50Z"
        },
        {
            "salesSummaryId": "02421d34-eab8-4c74-be90-29ae960217e0",
            "totalValue": 7378147.37,
            "changePercentage": -8.68,
            "date": "2023-06-02T21:55:25Z"
        },
        {
            "salesSummaryId": "dab41155-3b2c-4260-9b92-0fb36239e76a",
            "totalValue": 5903962.21,
            "changePercentage": 54.41,
            "date": "2023-04-15T12:08:49Z"
        },
        {
            "salesSummaryId": "777946fe-c45b-48c4-8009-dd34727a2d6e",
            "totalValue": 3995392.55,
            "changePercentage": -39.88,
            "date": "2023-06-04T10:27:19Z"
        },
        {
            "salesSummaryId": "0218422f-dff4-4b96-a485-ec81dfb52b1d",
            "totalValue": 2236665.35,
            "changePercentage": 62.25,
            "date": "2023-04-26T18:00:10Z"
        },
        {
            "salesSummaryId": "2cdc1dff-3f48-4223-b75d-6d40d5ebd70f",
            "totalValue": 4924895.6,
            "changePercentage": 91.7,
            "date": "2023-10-03T09:22:11Z"
        },
        {
            "salesSummaryId": "2876f4ae-7146-4144-a424-1050d3889af9",
            "totalValue": 8020749.83,
            "changePercentage": -53.71,
            "date": "2023-09-09T18:08:04Z"
        },
        {
            "salesSummaryId": "72d4764c-6438-43e8-9f5e-1e1392c49daa",
            "totalValue": 1401814.98,
            "changePercentage": -62.89,
            "date": "2024-01-23T21:18:15Z"
        },
        {
            "salesSummaryId": "0eb49bc9-7bb1-4593-b63c-623604b4d39e",
            "totalValue": 7075340.95,
            "changePercentage": 51.63,
            "date": "2023-04-12T18:35:19Z"
        },
        {
            "salesSummaryId": "a03badbe-ed85-4f67-8563-e70957d711f5",
            "totalValue": 6635158.49,
            "changePercentage": 1.55,
            "date": "2024-01-08T18:20:24Z"
        },
        {
            "salesSummaryId": "ef37f796-5792-48b5-947b-0861d1bcf1d2",
            "totalValue": 5438733.13,
            "changePercentage": 64.23,
            "date": "2023-06-04T03:34:31Z"
        },
        {
            "salesSummaryId": "38f4698c-f973-4118-a38f-0c772dc55993",
            "totalValue": 8733498.2,
            "changePercentage": -9.14,
            "date": "2023-06-18T12:45:24Z"
        },
        {
            "salesSummaryId": "bb7b3f86-95f6-414a-95c5-d6ad13a50e3b",
            "totalValue": 8834598.88,
            "changePercentage": -74.91,
            "date": "2023-09-18T22:57:29Z"
        },
        {
            "salesSummaryId": "6f673a1d-78e9-4ea8-91e2-d7a32836cd3a",
            "totalValue": 1518126.03,
            "changePercentage": 22.59,
            "date": "2024-02-17T06:29:57Z"
        },
        {
            "salesSummaryId": "ac08ecc4-f5e2-4f65-8f7d-3e9e02771657",
            "totalValue": 8916033.73,
            "changePercentage": -70.49,
            "date": "2023-11-23T06:52:42Z"
        },
        {
            "salesSummaryId": "3245bcab-7939-43ef-8f75-66bb2e092637",
            "totalValue": 8457395.47,
            "changePercentage": 58.85,
            "date": "2023-06-14T06:58:44Z"
        },
        {
            "salesSummaryId": "211ab48b-03e9-4e87-aff8-24723760c650",
            "totalValue": 2131348.79,
            "changePercentage": -46.72,
            "date": "2023-04-07T03:15:00Z"
        },
        {
            "salesSummaryId": "6bff1b90-9e27-493b-aead-d70b388c5058",
            "totalValue": 4439655.91,
            "changePercentage": -10.54,
            "date": "2023-08-08T00:53:14Z"
        },
        {
            "salesSummaryId": "b2cd84fc-8f66-477a-ad53-eb7826b89eae",
            "totalValue": 2253721.94,
            "changePercentage": -26.4,
            "date": "2023-12-04T03:33:12Z"
        },
        {
            "salesSummaryId": "db47a861-5062-49c5-92c1-0a8f13ec70b0",
            "totalValue": 3844322.3,
            "changePercentage": -23.92,
            "date": "2023-07-18T05:39:04Z"
        },
        {
            "salesSummaryId": "47ab518f-ec0e-4793-8d3b-53780452e472",
            "totalValue": 3145456.83,
            "changePercentage": -80.96,
            "date": "2023-05-18T14:04:36Z"
        },
        {
            "salesSummaryId": "2f255c3a-d024-4a49-9e3e-3ff4e529c362",
            "totalValue": 5041224.3,
            "changePercentage": 50.26,
            "date": "2023-08-15T23:43:31Z"
        },
        {
            "salesSummaryId": "1344c490-9f30-4a09-8379-e26dc551599e",
            "totalValue": 8409410.21,
            "changePercentage": 27.52,
            "date": "2024-01-01T14:21:37Z"
        },
        {
            "salesSummaryId": "f9e8bb8b-b267-49d9-b621-7f912b348e81",
            "totalValue": 4049054.53,
            "changePercentage": -9.75,
            "date": "2023-04-08T22:11:59Z"
        }
    ],
    purchases: [
        {
            "purchaseId": "5035f91e-4a29-411a-8779-17f6105675f1",
            "productId": "d35623ee-bef6-42b2-8776-2f99f8bb4782",
            "timestamp": "2007-09-28T13:56:51Z",
            "quantity": 875,
            "unitCost": 4163.31,
            "totalCost": 7871.43
        },
        {
            "purchaseId": "85841cb5-2132-40f2-b923-9769ee3c199b",
            "productId": "8ac1ac77-7358-425e-be16-0bdde9f02e59",
            "timestamp": "2015-02-01T13:04:43Z",
            "quantity": 471,
            "unitCost": 5673.17,
            "totalCost": 485.48
        },
        {
            "purchaseId": "de384851-f898-4495-99b8-73448bb470bf",
            "productId": "1afc136b-4d9f-4e8e-aace-8e1df908a404",
            "timestamp": "2010-10-22T19:38:20Z",
            "quantity": 37,
            "unitCost": 3835.06,
            "totalCost": 4202.25
        },
        {
            "purchaseId": "e0b0486c-6396-42b7-9a84-e21bd3a88600",
            "productId": "af84cc12-4fea-4f58-aece-f2ce92ca9580",
            "timestamp": "2020-01-25T13:30:58Z",
            "quantity": 201,
            "unitCost": 1822.27,
            "totalCost": 8028.29
        },
        {
            "purchaseId": "822e6025-e582-4e8c-b143-dc5ebad4c18c",
            "productId": "86e3bb1c-2f5d-4774-98f3-4df7cddd0a0f",
            "timestamp": "2011-12-30T12:54:41Z",
            "quantity": 789,
            "unitCost": 9238.02,
            "totalCost": 5086.57
        },
        {
            "purchaseId": "dd6d3a14-92d5-40f4-9bf4-92fb4043882c",
            "productId": "26b017c6-06d8-443f-9b4a-d6b1cee6f4c0",
            "timestamp": "2014-02-26T01:13:31Z",
            "quantity": 251,
            "unitCost": 2443.32,
            "totalCost": 9520.42
        },
        {
            "purchaseId": "434e5415-cb23-4170-b1e7-bc85737dc8c7",
            "productId": "440c9e80-6bf8-4eb3-b2d2-f81936d67de3",
            "timestamp": "2001-11-18T23:49:33Z",
            "quantity": 418,
            "unitCost": 5085.79,
            "totalCost": 5394.89
        },
        {
            "purchaseId": "963a92ab-e092-4f3d-8b6a-5ab803550d78",
            "productId": "98255f4e-40a6-470f-89a5-0792729f8947",
            "timestamp": "2020-04-27T08:53:44Z",
            "quantity": 926,
            "unitCost": 8626.52,
            "totalCost": 3526.35
        },
        {
            "purchaseId": "b4aebfdc-bce9-4e90-89fc-5098447d687a",
            "productId": "2a339fb2-f9f3-43bc-a85a-b217a0a38f12",
            "timestamp": "2020-02-05T13:02:55Z",
            "quantity": 754,
            "unitCost": 9052.79,
            "totalCost": 8035.97
        },
        {
            "purchaseId": "de2ba6a2-c291-4a60-aad1-23d5749c5847",
            "productId": "8a8391b2-b4ac-4847-b652-66ffd8d65875",
            "timestamp": "2020-05-07T16:41:13Z",
            "quantity": 365,
            "unitCost": 1105.02,
            "totalCost": 361.77
        },
        {
            "purchaseId": "78ea5f20-8fcc-4b6c-836f-e4b7a58d7479",
            "productId": "be2157fb-7454-405e-9511-bf7ba81b7726",
            "timestamp": "2014-08-12T16:37:41Z",
            "quantity": 975,
            "unitCost": 4783.47,
            "totalCost": 9517.85
        },
        {
            "purchaseId": "61ba57e9-81fe-4d04-85b5-6aab219ced9d",
            "productId": "fdf1ba3d-fa06-4ce5-90ff-d081c5d37176",
            "timestamp": "2008-12-07T16:18:59Z",
            "quantity": 286,
            "unitCost": 6910.82,
            "totalCost": 9006.07
        },
        {
            "purchaseId": "012d028b-4d6b-43bf-8d69-edf296133c9e",
            "productId": "afded6df-058f-477d-9878-e0e0b1d3dff3",
            "timestamp": "2005-12-29T10:50:55Z",
            "quantity": 71,
            "unitCost": 4058.81,
            "totalCost": 5983.42
        },
        {
            "purchaseId": "8155b76c-3da2-4fb4-ba18-68bf8a2cec1b",
            "productId": "daa29167-82a7-474b-9687-b8b903e7ec69",
            "timestamp": "2007-08-15T18:41:49Z",
            "quantity": 963,
            "unitCost": 2198.44,
            "totalCost": 4935.68
        },
        {
            "purchaseId": "4d449c76-ee8a-473e-8135-f74875a31964",
            "productId": "ccb83982-71f3-4497-bad8-7e64c6920dc6",
            "timestamp": "2014-12-05T06:28:48Z",
            "quantity": 614,
            "unitCost": 6565.99,
            "totalCost": 6406.98
        },
        {
            "purchaseId": "115c6e6c-e6d0-418f-990e-1730f9e4b02e",
            "productId": "1936d406-e89e-40e4-bff7-1827532269d4",
            "timestamp": "2003-12-17T12:52:02Z",
            "quantity": 193,
            "unitCost": 2562.72,
            "totalCost": 788.08
        },
        {
            "purchaseId": "7b898dfe-79e0-472c-a19e-d75d6a2719fd",
            "productId": "c849a535-5f8b-47e3-889c-015693a644ac",
            "timestamp": "2014-05-13T17:09:07Z",
            "quantity": 585,
            "unitCost": 1580.69,
            "totalCost": 2633.43
        },
        {
            "purchaseId": "cb3000e8-df2e-4e8b-99ed-4ceb35077404",
            "productId": "0c3e80ee-59b3-4fc4-b760-8b07acc2d3ae",
            "timestamp": "2006-10-21T15:28:13Z",
            "quantity": 938,
            "unitCost": 6197.05,
            "totalCost": 3487.61
        },
        {
            "purchaseId": "8b709837-e51b-493a-8720-89e64f9888e2",
            "productId": "d8f5bee3-f3eb-4071-a124-6b857e0fd798",
            "timestamp": "2002-08-23T21:20:02Z",
            "quantity": 388,
            "unitCost": 3280.29,
            "totalCost": 21.24
        },
        {
            "purchaseId": "8ee49368-1e96-41ed-bc53-7ba90ed537a4",
            "productId": "8d15de86-0e4a-4414-9166-7a33610202d3",
            "timestamp": "2022-09-09T02:34:59Z",
            "quantity": 463,
            "unitCost": 4646.46,
            "totalCost": 273.21
        },
        {
            "purchaseId": "a6d93761-366f-4e66-9a2f-2621d94896cb",
            "productId": "ea8fd0b9-c2d9-4d43-9c23-44cb99d079bb",
            "timestamp": "2013-04-06T06:29:40Z",
            "quantity": 893,
            "unitCost": 2857.95,
            "totalCost": 7423.21
        },
        {
            "purchaseId": "c6207ac3-3c64-49f4-9383-e47c32f11c28",
            "productId": "25d01c80-bca1-4a00-b1d0-0fbd39ff9e89",
            "timestamp": "2002-06-17T12:03:13Z",
            "quantity": 22,
            "unitCost": 3180.14,
            "totalCost": 9077.46
        },
        {
            "purchaseId": "02cb1517-154a-469e-88a1-33449be5b6de",
            "productId": "1d6df6e3-b7ea-4507-9d66-87c6ee8ed5b9",
            "timestamp": "2017-05-26T03:42:34Z",
            "quantity": 70,
            "unitCost": 4308.81,
            "totalCost": 1589.27
        },
        {
            "purchaseId": "6e468dfb-8cfc-4ad6-af0c-af0a1f6726ab",
            "productId": "000a8c23-5bca-436c-a216-4e747a94c511",
            "timestamp": "2013-02-03T13:03:56Z",
            "quantity": 208,
            "unitCost": 3424.81,
            "totalCost": 9545.07
        },
        {
            "purchaseId": "0f67af62-d82b-4986-ba91-0d7cc8261e21",
            "productId": "c5b600dc-6bfb-492a-b335-c3cc8c707959",
            "timestamp": "2020-03-16T04:44:49Z",
            "quantity": 309,
            "unitCost": 9757.04,
            "totalCost": 9843.24
        },
        {
            "purchaseId": "c7539c9a-06a1-4e1c-aba1-4b7c60354974",
            "productId": "9d5fafbc-312b-47e8-ada1-283918f0c3b5",
            "timestamp": "2011-08-01T04:44:36Z",
            "quantity": 97,
            "unitCost": 4437.3,
            "totalCost": 7227.92
        },
        {
            "purchaseId": "80e5fcca-73a3-4679-b27f-21328a77e077",
            "productId": "0114d5d4-ae48-46fa-b0ca-afe60eb88add",
            "timestamp": "2021-10-23T09:58:14Z",
            "quantity": 727,
            "unitCost": 6706.78,
            "totalCost": 3444.68
        },
        {
            "purchaseId": "33d99aae-0b34-4c3c-af34-dba1201fa025",
            "productId": "e5b0da8c-148d-4680-b262-8609fb8a10da",
            "timestamp": "2013-12-25T00:37:26Z",
            "quantity": 246,
            "unitCost": 7074.43,
            "totalCost": 1551.41
        },
        {
            "purchaseId": "0a05c7b9-01a2-48d2-b1ed-51e11dc50550",
            "productId": "2be5b024-2c96-4f29-912c-c6f36353f799",
            "timestamp": "2001-10-29T19:34:59Z",
            "quantity": 193,
            "unitCost": 1576.29,
            "totalCost": 5458.34
        },
        {
            "purchaseId": "4bbd5b44-51ea-40cb-b993-8c1c1f3d6146",
            "productId": "fcf2e432-62a3-4b6f-a34d-36e42a12272e",
            "timestamp": "2008-05-09T00:34:59Z",
            "quantity": 265,
            "unitCost": 9629.95,
            "totalCost": 9902.55
        },
        {
            "purchaseId": "1dc72d06-61c1-4606-b604-15fcd1a3943e",
            "productId": "fc4c81e5-f1ac-40f5-8c6f-da3fbad5599d",
            "timestamp": "2018-12-12T10:12:24Z",
            "quantity": 342,
            "unitCost": 9107.59,
            "totalCost": 9187.51
        },
        {
            "purchaseId": "51f66b06-f965-433c-9fca-35e344324b3f",
            "productId": "07238d8e-0037-4972-87ca-0df206ee3e42",
            "timestamp": "2022-11-23T16:45:20Z",
            "quantity": 623,
            "unitCost": 3511.85,
            "totalCost": 8448.84
        },
        {
            "purchaseId": "0669c359-14ad-488f-bf66-553cb4263a06",
            "productId": "154b7860-23a2-4564-ad99-1745ab7122ef",
            "timestamp": "2016-06-18T10:26:07Z",
            "quantity": 856,
            "unitCost": 584.88,
            "totalCost": 6455.21
        },
        {
            "purchaseId": "5e697ec5-7722-48b5-b682-c3752a11b62e",
            "productId": "8d4bf814-65d4-4df4-84cc-68911d925fdf",
            "timestamp": "2003-08-07T17:41:10Z",
            "quantity": 330,
            "unitCost": 9835.78,
            "totalCost": 311.95
        },
        {
            "purchaseId": "3e54b486-1044-46b6-82f9-2646d92d4afa",
            "productId": "a52bf1bd-3d35-4cd2-849a-354e3952e2d2",
            "timestamp": "2007-02-01T19:40:46Z",
            "quantity": 265,
            "unitCost": 6506.44,
            "totalCost": 6583.9
        },
        {
            "purchaseId": "3726ca7b-1f32-4cad-a21b-6112de7d73ad",
            "productId": "d35623ee-bef6-42b2-8776-2f99f8bb4782",
            "timestamp": "2012-07-16T01:03:33Z",
            "quantity": 395,
            "unitCost": 4122.4,
            "totalCost": 4838.66
        },
        {
            "purchaseId": "54e4ebc5-b083-42f3-a3ec-90dcd64923f3",
            "productId": "8ac1ac77-7358-425e-be16-0bdde9f02e59",
            "timestamp": "2002-02-19T15:33:07Z",
            "quantity": 230,
            "unitCost": 2500.44,
            "totalCost": 7003.48
        },
        {
            "purchaseId": "21af41db-67ee-42fb-ad12-8e53c9017a21",
            "productId": "1afc136b-4d9f-4e8e-aace-8e1df908a404",
            "timestamp": "2005-04-20T20:56:35Z",
            "quantity": 770,
            "unitCost": 3563.47,
            "totalCost": 2068.71
        },
        {
            "purchaseId": "6efcb79a-8db6-4271-b28b-cfb46441d6d8",
            "productId": "af84cc12-4fea-4f58-aece-f2ce92ca9580",
            "timestamp": "2013-01-08T17:38:44Z",
            "quantity": 903,
            "unitCost": 6854.34,
            "totalCost": 6894.18
        },
        {
            "purchaseId": "a5d27d65-6419-4741-94f0-9499151f9031",
            "productId": "86e3bb1c-2f5d-4774-98f3-4df7cddd0a0f",
            "timestamp": "2018-11-16T06:44:31Z",
            "quantity": 220,
            "unitCost": 170.61,
            "totalCost": 3140.28
        },
        {
            "purchaseId": "0ffb160a-c687-4155-bea3-fc3ecc7da237",
            "productId": "26b017c6-06d8-443f-9b4a-d6b1cee6f4c0",
            "timestamp": "2022-02-13T05:52:33Z",
            "quantity": 625,
            "unitCost": 5823.23,
            "totalCost": 4498.82
        },
        {
            "purchaseId": "f96e84fc-3b9c-4f96-b80c-0646752c2624",
            "productId": "440c9e80-6bf8-4eb3-b2d2-f81936d67de3",
            "timestamp": "2008-05-05T23:57:50Z",
            "quantity": 260,
            "unitCost": 1320.91,
            "totalCost": 6951.15
        },
        {
            "purchaseId": "65419b2f-d156-408b-bfb6-52846e3aca1d",
            "productId": "98255f4e-40a6-470f-89a5-0792729f8947",
            "timestamp": "2010-06-27T23:54:15Z",
            "quantity": 72,
            "unitCost": 6999.3,
            "totalCost": 4171.88
        },
        {
            "purchaseId": "cd59eb23-5b53-4a0c-a1a0-0950c5ea17f4",
            "productId": "2a339fb2-f9f3-43bc-a85a-b217a0a38f12",
            "timestamp": "2018-06-04T02:16:54Z",
            "quantity": 846,
            "unitCost": 1424.7,
            "totalCost": 604.87
        },
        {
            "purchaseId": "31b464d9-89a7-431e-9bf1-9d68ee05d549",
            "productId": "8a8391b2-b4ac-4847-b652-66ffd8d65875",
            "timestamp": "2019-12-08T22:05:22Z",
            "quantity": 998,
            "unitCost": 9289.05,
            "totalCost": 3108.03
        },
        {
            "purchaseId": "767fc135-43ca-4067-87bb-0ab503bbd4c3",
            "productId": "be2157fb-7454-405e-9511-bf7ba81b7726",
            "timestamp": "2005-01-25T15:21:10Z",
            "quantity": 311,
            "unitCost": 1386.68,
            "totalCost": 8924.26
        },
        {
            "purchaseId": "52ce8633-b4cc-455d-94ab-531a7fb5b720",
            "productId": "fdf1ba3d-fa06-4ce5-90ff-d081c5d37176",
            "timestamp": "2022-09-27T13:23:04Z",
            "quantity": 71,
            "unitCost": 6751.76,
            "totalCost": 2580.36
        },
        {
            "purchaseId": "e292f886-0f8d-4989-bc01-f43dfffde54e",
            "productId": "afded6df-058f-477d-9878-e0e0b1d3dff3",
            "timestamp": "2008-10-13T00:50:04Z",
            "quantity": 134,
            "unitCost": 4446.17,
            "totalCost": 1718.57
        },
        {
            "purchaseId": "42e2086e-6dda-4c8e-b635-4387d794d6a0",
            "productId": "daa29167-82a7-474b-9687-b8b903e7ec69",
            "timestamp": "2014-09-16T22:59:06Z",
            "quantity": 807,
            "unitCost": 9916.73,
            "totalCost": 6818.54
        },
        {
            "purchaseId": "c223c7fe-38d5-4291-b618-c44bd9f797a7",
            "productId": "ccb83982-71f3-4497-bad8-7e64c6920dc6",
            "timestamp": "2007-03-28T02:21:31Z",
            "quantity": 726,
            "unitCost": 2967.87,
            "totalCost": 5509.38
        },
        {
            "purchaseId": "e12f6fd6-af77-4556-8866-c724d88acc5d",
            "productId": "1936d406-e89e-40e4-bff7-1827532269d4",
            "timestamp": "2010-09-20T14:09:37Z",
            "quantity": 763,
            "unitCost": 2083.13,
            "totalCost": 9062.53
        },
        {
            "purchaseId": "503fbb6e-2c84-4293-ad1e-8ad1a4ea3c8f",
            "productId": "c849a535-5f8b-47e3-889c-015693a644ac",
            "timestamp": "2016-08-03T19:45:31Z",
            "quantity": 675,
            "unitCost": 6611.91,
            "totalCost": 2353.38
        },
        {
            "purchaseId": "418785b8-d434-4f1b-827b-52584eb91414",
            "productId": "0c3e80ee-59b3-4fc4-b760-8b07acc2d3ae",
            "timestamp": "2005-03-28T16:39:46Z",
            "quantity": 839,
            "unitCost": 1488.73,
            "totalCost": 403.2
        },
        {
            "purchaseId": "032f3bc6-1edf-45ee-8cdd-7a3dbd4ec6bd",
            "productId": "d8f5bee3-f3eb-4071-a124-6b857e0fd798",
            "timestamp": "2010-09-11T18:58:14Z",
            "quantity": 776,
            "unitCost": 9893.08,
            "totalCost": 2071.46
        },
        {
            "purchaseId": "f64f8bfd-7c71-4bb0-a74e-21907a8b2a71",
            "productId": "8d15de86-0e4a-4414-9166-7a33610202d3",
            "timestamp": "2011-06-19T11:19:53Z",
            "quantity": 720,
            "unitCost": 3132.2,
            "totalCost": 1104.45
        },
        {
            "purchaseId": "aa148601-a438-4c9a-ba20-6645945e750b",
            "productId": "ea8fd0b9-c2d9-4d43-9c23-44cb99d079bb",
            "timestamp": "2001-12-13T15:26:09Z",
            "quantity": 392,
            "unitCost": 4880.07,
            "totalCost": 7915.32
        },
        {
            "purchaseId": "feabf3d1-9727-4b03-bd5c-2c97d85fc91e",
            "productId": "25d01c80-bca1-4a00-b1d0-0fbd39ff9e89",
            "timestamp": "2019-07-06T09:30:09Z",
            "quantity": 265,
            "unitCost": 2609.83,
            "totalCost": 1980.18
        },
        {
            "purchaseId": "6f44cf51-39cf-46c6-8e7e-719347ec2124",
            "productId": "1d6df6e3-b7ea-4507-9d66-87c6ee8ed5b9",
            "timestamp": "2005-08-17T21:00:54Z",
            "quantity": 984,
            "unitCost": 8085.15,
            "totalCost": 8511.07
        },
        {
            "purchaseId": "e76ebddb-90a1-4916-a3bd-17b5c58855dd",
            "productId": "000a8c23-5bca-436c-a216-4e747a94c511",
            "timestamp": "2003-10-14T08:56:13Z",
            "quantity": 575,
            "unitCost": 6609.95,
            "totalCost": 3212.6
        },
        {
            "purchaseId": "00fb05b1-724d-4b82-8600-441d20127ecb",
            "productId": "c5b600dc-6bfb-492a-b335-c3cc8c707959",
            "timestamp": "2009-01-26T02:37:46Z",
            "quantity": 324,
            "unitCost": 5032.83,
            "totalCost": 6453.79
        },
        {
            "purchaseId": "2b5d452d-be4f-4fc0-a018-a156b0aa144a",
            "productId": "9d5fafbc-312b-47e8-ada1-283918f0c3b5",
            "timestamp": "2017-09-20T01:05:24Z",
            "quantity": 859,
            "unitCost": 9826.12,
            "totalCost": 4717.49
        },
        {
            "purchaseId": "8272d8dc-df85-455c-b2ec-7cc4611a570c",
            "productId": "0114d5d4-ae48-46fa-b0ca-afe60eb88add",
            "timestamp": "2014-11-05T03:06:06Z",
            "quantity": 713,
            "unitCost": 8238.67,
            "totalCost": 6012.29
        },
        {
            "purchaseId": "5d8b58d2-63b1-4419-ab46-16ed3664adfc",
            "productId": "e5b0da8c-148d-4680-b262-8609fb8a10da",
            "timestamp": "2008-11-29T17:59:44Z",
            "quantity": 230,
            "unitCost": 684.84,
            "totalCost": 202.1
        },
        {
            "purchaseId": "e33fabca-19cf-469b-b3e7-6e5f1f434a3e",
            "productId": "2be5b024-2c96-4f29-912c-c6f36353f799",
            "timestamp": "2018-03-14T04:27:34Z",
            "quantity": 247,
            "unitCost": 7781.32,
            "totalCost": 55.1
        },
        {
            "purchaseId": "17c90a13-0871-44a5-9dcf-9b46d756b780",
            "productId": "fcf2e432-62a3-4b6f-a34d-36e42a12272e",
            "timestamp": "2010-05-03T03:18:22Z",
            "quantity": 267,
            "unitCost": 5.18,
            "totalCost": 5559.82
        },
        {
            "purchaseId": "22be5e72-440c-4a02-8176-9eb50d9cdc99",
            "productId": "fc4c81e5-f1ac-40f5-8c6f-da3fbad5599d",
            "timestamp": "2001-09-14T20:35:26Z",
            "quantity": 298,
            "unitCost": 388.02,
            "totalCost": 364.51
        },
        {
            "purchaseId": "3b663fc6-e550-4513-9df4-ecd7399e3ad4",
            "productId": "07238d8e-0037-4972-87ca-0df206ee3e42",
            "timestamp": "2021-07-11T20:29:31Z",
            "quantity": 356,
            "unitCost": 3099.1,
            "totalCost": 9858.3
        },
        {
            "purchaseId": "a7cd1009-cca3-4dd0-a08e-519fbef15886",
            "productId": "154b7860-23a2-4564-ad99-1745ab7122ef",
            "timestamp": "2015-11-29T04:47:23Z",
            "quantity": 560,
            "unitCost": 8579.08,
            "totalCost": 6600.09
        },
        {
            "purchaseId": "08232378-99cf-4828-b36f-6d7a31baba64",
            "productId": "8d4bf814-65d4-4df4-84cc-68911d925fdf",
            "timestamp": "2016-09-15T07:58:08Z",
            "quantity": 843,
            "unitCost": 556.0,
            "totalCost": 6556.65
        },
        {
            "purchaseId": "d33fe221-fd05-4f75-a8cd-8540ab8e8ce6",
            "productId": "a52bf1bd-3d35-4cd2-849a-354e3952e2d2",
            "timestamp": "2016-03-27T16:52:42Z",
            "quantity": 288,
            "unitCost": 9563.81,
            "totalCost": 1649.02
        },
        {
            "purchaseId": "9cd56445-6055-450a-a992-e3ae14bb3338",
            "productId": "d35623ee-bef6-42b2-8776-2f99f8bb4782",
            "timestamp": "2000-03-20T02:42:32Z",
            "quantity": 725,
            "unitCost": 9495.08,
            "totalCost": 5749.92
        },
        {
            "purchaseId": "fd6d7c0a-5d02-4dbc-8217-1d826eb569ce",
            "productId": "8ac1ac77-7358-425e-be16-0bdde9f02e59",
            "timestamp": "2012-09-14T23:33:07Z",
            "quantity": 141,
            "unitCost": 4504.95,
            "totalCost": 1561.89
        },
        {
            "purchaseId": "fe28b71d-8883-4157-ac89-4a5105e8ff54",
            "productId": "1afc136b-4d9f-4e8e-aace-8e1df908a404",
            "timestamp": "2008-01-02T02:33:03Z",
            "quantity": 388,
            "unitCost": 6425.96,
            "totalCost": 837.03
        },
        {
            "purchaseId": "93a95d90-2d95-4e21-9d61-deb872b8ce23",
            "productId": "af84cc12-4fea-4f58-aece-f2ce92ca9580",
            "timestamp": "2018-06-18T17:24:06Z",
            "quantity": 194,
            "unitCost": 8925.08,
            "totalCost": 8644.66
        },
        {
            "purchaseId": "52a78535-b622-4c9e-834c-21ca705d07b5",
            "productId": "86e3bb1c-2f5d-4774-98f3-4df7cddd0a0f",
            "timestamp": "2022-11-06T03:27:35Z",
            "quantity": 873,
            "unitCost": 7537.82,
            "totalCost": 1841.36
        },
        {
            "purchaseId": "ed4adaea-bcd2-49e5-bc9e-84ed807fa04c",
            "productId": "26b017c6-06d8-443f-9b4a-d6b1cee6f4c0",
            "timestamp": "2022-04-20T14:20:15Z",
            "quantity": 70,
            "unitCost": 5186.13,
            "totalCost": 9731.04
        },
        {
            "purchaseId": "1ee44e30-7a8f-4e88-b6dd-01c11b26f6b9",
            "productId": "440c9e80-6bf8-4eb3-b2d2-f81936d67de3",
            "timestamp": "2008-04-18T13:02:07Z",
            "quantity": 10,
            "unitCost": 6835.47,
            "totalCost": 4138.19
        },
        {
            "purchaseId": "913bc6d9-6757-457c-a565-471396e4f5b5",
            "productId": "98255f4e-40a6-470f-89a5-0792729f8947",
            "timestamp": "2010-06-26T01:51:22Z",
            "quantity": 651,
            "unitCost": 1095.15,
            "totalCost": 503.43
        },
        {
            "purchaseId": "d33baec5-186c-428d-996d-6dbd12e20c10",
            "productId": "2a339fb2-f9f3-43bc-a85a-b217a0a38f12",
            "timestamp": "2015-06-01T00:52:08Z",
            "quantity": 638,
            "unitCost": 2282.03,
            "totalCost": 5722.0
        },
        {
            "purchaseId": "6eb61d25-4cf6-43f8-a52d-302cf0b29553",
            "productId": "8a8391b2-b4ac-4847-b652-66ffd8d65875",
            "timestamp": "2011-04-19T21:39:04Z",
            "quantity": 67,
            "unitCost": 5414.05,
            "totalCost": 1905.77
        },
        {
            "purchaseId": "37b1920b-5a4b-41c7-bbf0-a872e93f2ab3",
            "productId": "be2157fb-7454-405e-9511-bf7ba81b7726",
            "timestamp": "2008-12-12T12:16:22Z",
            "quantity": 775,
            "unitCost": 333.25,
            "totalCost": 2883.66
        },
        {
            "purchaseId": "9b4f68c8-2d1a-44c8-95e9-3b257a6c37e3",
            "productId": "fdf1ba3d-fa06-4ce5-90ff-d081c5d37176",
            "timestamp": "2020-12-29T16:46:08Z",
            "quantity": 513,
            "unitCost": 6781.28,
            "totalCost": 5454.83
        },
        {
            "purchaseId": "87c3172d-9ae8-4163-b8ef-ad638fa27c95",
            "productId": "afded6df-058f-477d-9878-e0e0b1d3dff3",
            "timestamp": "2019-04-05T05:20:27Z",
            "quantity": 13,
            "unitCost": 5414.02,
            "totalCost": 4540.62
        },
        {
            "purchaseId": "8aed5186-cb4a-4bbb-b8be-857ff8227289",
            "productId": "daa29167-82a7-474b-9687-b8b903e7ec69",
            "timestamp": "2019-05-19T23:47:06Z",
            "quantity": 522,
            "unitCost": 2047.88,
            "totalCost": 456.65
        },
        {
            "purchaseId": "a5e1bed8-ced3-41cd-af3b-d891e01e1c1d",
            "productId": "ccb83982-71f3-4497-bad8-7e64c6920dc6",
            "timestamp": "2018-12-19T05:41:28Z",
            "quantity": 20,
            "unitCost": 7741.5,
            "totalCost": 6205.14
        },
        {
            "purchaseId": "dcc30321-e243-4cce-808a-2e0c553eee94",
            "productId": "1936d406-e89e-40e4-bff7-1827532269d4",
            "timestamp": "2002-10-06T13:58:33Z",
            "quantity": 473,
            "unitCost": 8571.71,
            "totalCost": 3088.43
        },
        {
            "purchaseId": "d3462347-2e06-46ff-9088-ceb25ee3ed11",
            "productId": "c849a535-5f8b-47e3-889c-015693a644ac",
            "timestamp": "2008-10-07T18:13:43Z",
            "quantity": 621,
            "unitCost": 2592.95,
            "totalCost": 5944.58
        },
        {
            "purchaseId": "24bb1ac4-4d5c-4308-a6f9-a004bd819f5e",
            "productId": "0c3e80ee-59b3-4fc4-b760-8b07acc2d3ae",
            "timestamp": "2003-08-29T16:23:44Z",
            "quantity": 240,
            "unitCost": 7732.65,
            "totalCost": 4956.83
        },
        {
            "purchaseId": "42d5ade2-6b62-47f0-aaa4-0b065a0b73ff",
            "productId": "d8f5bee3-f3eb-4071-a124-6b857e0fd798",
            "timestamp": "2020-08-16T06:05:41Z",
            "quantity": 729,
            "unitCost": 9648.57,
            "totalCost": 9558.36
        },
        {
            "purchaseId": "394dd7bb-d9ca-4ded-87ca-6336ca68f06c",
            "productId": "8d15de86-0e4a-4414-9166-7a33610202d3",
            "timestamp": "2019-06-19T07:23:51Z",
            "quantity": 109,
            "unitCost": 6608.23,
            "totalCost": 8900.4
        },
        {
            "purchaseId": "312e3902-2aaa-4678-bafb-534ec5fc1c24",
            "productId": "ea8fd0b9-c2d9-4d43-9c23-44cb99d079bb",
            "timestamp": "2014-03-12T17:47:55Z",
            "quantity": 490,
            "unitCost": 4139.51,
            "totalCost": 428.37
        },
        {
            "purchaseId": "9685898d-0b3c-4500-98cf-101e4e5818cf",
            "productId": "25d01c80-bca1-4a00-b1d0-0fbd39ff9e89",
            "timestamp": "2002-12-27T20:19:43Z",
            "quantity": 926,
            "unitCost": 305.23,
            "totalCost": 326.1
        },
        {
            "purchaseId": "c67d1950-3c03-401e-9f4a-573cc919c3ff",
            "productId": "1d6df6e3-b7ea-4507-9d66-87c6ee8ed5b9",
            "timestamp": "2000-03-28T15:44:26Z",
            "quantity": 210,
            "unitCost": 838.57,
            "totalCost": 3004.31
        },
        {
            "purchaseId": "0d793046-8eff-412c-983e-c13196c331cf",
            "productId": "000a8c23-5bca-436c-a216-4e747a94c511",
            "timestamp": "2009-09-30T02:48:52Z",
            "quantity": 452,
            "unitCost": 6538.73,
            "totalCost": 9188.61
        },
        {
            "purchaseId": "b38af82a-d3fb-46ec-9f98-346faf95629f",
            "productId": "c5b600dc-6bfb-492a-b335-c3cc8c707959",
            "timestamp": "2018-01-17T10:45:44Z",
            "quantity": 418,
            "unitCost": 7846.58,
            "totalCost": 9258.71
        },
        {
            "purchaseId": "32e25004-21cf-44ab-b44e-e3580d0ef9ce",
            "productId": "9d5fafbc-312b-47e8-ada1-283918f0c3b5",
            "timestamp": "2004-07-18T14:25:34Z",
            "quantity": 902,
            "unitCost": 1056.47,
            "totalCost": 4319.07
        },
        {
            "purchaseId": "0bfea984-8cdd-45ee-9407-5c9da64f94b0",
            "productId": "0114d5d4-ae48-46fa-b0ca-afe60eb88add",
            "timestamp": "2017-01-24T20:41:03Z",
            "quantity": 757,
            "unitCost": 5163.91,
            "totalCost": 8653.39
        },
        {
            "purchaseId": "570950ee-9c94-4423-bc5d-546524adf1f3",
            "productId": "e5b0da8c-148d-4680-b262-8609fb8a10da",
            "timestamp": "2013-02-09T06:05:04Z",
            "quantity": 856,
            "unitCost": 9928.49,
            "totalCost": 3502.45
        },
        {
            "purchaseId": "5ad8b5f9-aaee-428e-aa11-3c1991e6d703",
            "productId": "2be5b024-2c96-4f29-912c-c6f36353f799",
            "timestamp": "2000-01-23T11:04:04Z",
            "quantity": 879,
            "unitCost": 4230.1,
            "totalCost": 7286.78
        },
        {
            "purchaseId": "6253b4e0-5089-4daa-ad09-6424516ff613",
            "productId": "fcf2e432-62a3-4b6f-a34d-36e42a12272e",
            "timestamp": "2004-07-08T16:20:29Z",
            "quantity": 762,
            "unitCost": 1296.53,
            "totalCost": 7583.95
        }
    ],
    purchaseSummary: [
        {
            "purchaseSummaryId": "c452c304-0f7e-474f-b750-43c542df3412",
            "totalPurchased": 7599849.58,
            "changePercentage": -50.31,
            "date": "2023-05-27T05:20:14Z"
        },
        {
            "purchaseSummaryId": "1206e83e-0e1b-42e5-8ec5-35cd1080f09d",
            "totalPurchased": 5701783.0,
            "changePercentage": -89.63,
            "date": "2023-12-05T05:52:50Z"
        },
        {
            "purchaseSummaryId": "21491665-4761-4dea-b5f1-16b04d9f57bb",
            "totalPurchased": 2875081.56,
            "changePercentage": 97.28,
            "date": "2023-03-20T06:11:24Z"
        },
        {
            "purchaseSummaryId": "a8ae9a24-a851-4a75-be59-a16834827bb8",
            "totalPurchased": 5887134.05,
            "changePercentage": 84.43,
            "date": "2023-12-16T17:22:23Z"
        },
        {
            "purchaseSummaryId": "2de46932-fab9-41f6-87ca-8c06083a66f2",
            "totalPurchased": 6700381.67,
            "changePercentage": -15.4,
            "date": "2023-03-26T07:09:45Z"
        },
        {
            "purchaseSummaryId": "63409896-65aa-4f06-9bb6-fd0b6336eeb5",
            "totalPurchased": 3703183.4,
            "changePercentage": 93.36,
            "date": "2023-09-12T18:48:33Z"
        },
        {
            "purchaseSummaryId": "ab29178e-21a0-407f-8cef-8f99f5bd140c",
            "totalPurchased": 8183876.36,
            "changePercentage": 10.75,
            "date": "2023-07-13T19:13:53Z"
        },
        {
            "purchaseSummaryId": "1475b96b-0d32-4679-b8dc-050e446f8cf8",
            "totalPurchased": 6771390.73,
            "changePercentage": 8.17,
            "date": "2023-04-17T20:13:19Z"
        },
        {
            "purchaseSummaryId": "cd22c91d-af7a-4334-843c-0d9b3bd90bf8",
            "totalPurchased": 5362805.15,
            "changePercentage": -69.92,
            "date": "2023-12-30T11:00:31Z"
        },
        {
            "purchaseSummaryId": "b9952c34-ef74-41f8-9c44-76e0516dc7b9",
            "totalPurchased": 7901696.36,
            "changePercentage": -8.22,
            "date": "2024-01-02T01:46:59Z"
        },
        {
            "purchaseSummaryId": "677b220c-96b8-46b8-b367-be71b8a2fbb2",
            "totalPurchased": 592809.08,
            "changePercentage": -19.9,
            "date": "2023-07-07T19:23:16Z"
        },
        {
            "purchaseSummaryId": "584fec60-a573-4445-b23e-fd9d46eebcab",
            "totalPurchased": 787656.13,
            "changePercentage": -85.81,
            "date": "2023-07-10T16:48:15Z"
        },
        {
            "purchaseSummaryId": "124d1a24-3fd2-415d-9a6d-11737c319082",
            "totalPurchased": 1358410.16,
            "changePercentage": 81.52,
            "date": "2024-01-01T16:20:10Z"
        },
        {
            "purchaseSummaryId": "fd8bfb7f-a97c-4dd3-a3b3-d838c6dcc753",
            "totalPurchased": 9262819.3,
            "changePercentage": -13.2,
            "date": "2024-01-08T04:29:17Z"
        },
        {
            "purchaseSummaryId": "61d68449-e3ed-4fc7-b8f3-603c5c099ad0",
            "totalPurchased": 2892692.95,
            "changePercentage": 4.89,
            "date": "2023-07-24T18:44:29Z"
        },
        {
            "purchaseSummaryId": "a9c42568-3668-4750-93a4-b8798471acde",
            "totalPurchased": 8176245.28,
            "changePercentage": -80.84,
            "date": "2024-02-07T16:49:38Z"
        },
        {
            "purchaseSummaryId": "79d7b45a-ba98-437f-95b0-aa21c071709c",
            "totalPurchased": 6376329.63,
            "changePercentage": -17.35,
            "date": "2023-11-02T15:29:19Z"
        },
        {
            "purchaseSummaryId": "71fe4534-87fc-439f-b6c8-3022aa5e7d4b",
            "totalPurchased": 490177.73,
            "changePercentage": -65.94,
            "date": "2023-08-25T13:45:04Z"
        },
        {
            "purchaseSummaryId": "5c0a56c3-5140-447d-b992-a7d7c44d472d",
            "totalPurchased": 8033241.77,
            "changePercentage": -81.26,
            "date": "2023-11-16T18:22:18Z"
        },
        {
            "purchaseSummaryId": "bd1cf049-4f69-4180-a5d1-72f37beef632",
            "totalPurchased": 8113334.96,
            "changePercentage": 18.99,
            "date": "2023-07-17T01:23:37Z"
        },
        {
            "purchaseSummaryId": "6f24990f-336d-460e-84ad-810d159bad88",
            "totalPurchased": 2083304.59,
            "changePercentage": -80.93,
            "date": "2023-09-27T23:20:39Z"
        },
        {
            "purchaseSummaryId": "37e2ae04-638f-41cc-b838-4f7ebdd5f60b",
            "totalPurchased": 6278248.14,
            "changePercentage": 8.44,
            "date": "2023-11-29T20:52:03Z"
        },
        {
            "purchaseSummaryId": "a498409d-df59-46da-8065-ecaabc4e9225",
            "totalPurchased": 5013546.73,
            "changePercentage": -99.52,
            "date": "2023-08-01T12:30:43Z"
        },
        {
            "purchaseSummaryId": "b1972f5c-50d3-4c8e-b3d2-d2ad12c86277",
            "totalPurchased": 7883690.1,
            "changePercentage": -95.76,
            "date": "2024-01-17T21:08:06Z"
        },
        {
            "purchaseSummaryId": "d9d14c29-f07f-4cb5-8271-0330825e8159",
            "totalPurchased": 9402337.34,
            "changePercentage": 81.92,
            "date": "2024-01-21T00:14:36Z"
        },
        {
            "purchaseSummaryId": "4fc51811-2e51-4776-b9b5-181e5f422f6a",
            "totalPurchased": 4571470.93,
            "changePercentage": -19.34,
            "date": "2023-06-01T18:39:59Z"
        },
        {
            "purchaseSummaryId": "ccfd8bd5-c2a1-4d13-bec1-74157854773a",
            "totalPurchased": 4718798.68,
            "changePercentage": 95.35,
            "date": "2024-02-06T03:40:01Z"
        },
        {
            "purchaseSummaryId": "c2ecb47d-7b26-4e78-8b48-96a436c434bd",
            "totalPurchased": 1087744.03,
            "changePercentage": 24.69,
            "date": "2024-01-28T09:04:52Z"
        },
        {
            "purchaseSummaryId": "5fc29456-3bcc-4b2c-9096-3c36bcfae126",
            "totalPurchased": 3256718.55,
            "changePercentage": 68.1,
            "date": "2023-08-07T10:29:19Z"
        },
        {
            "purchaseSummaryId": "3b42e538-f6b8-4d8b-8778-9c052a581d58",
            "totalPurchased": 826579.41,
            "changePercentage": -87.81,
            "date": "2023-11-19T02:00:54Z"
        }
    ],
    users: [
        {
            "userId": "3b0fd66b-a4d6-4d95-94e4-01940c99aedb",
            "name": "Carly",
            "email": "cvansalzberger0@cisco.com"
        },
        {
            "userId": "d9d323fa-5c98-4222-a352-120e1f5e2798",
            "name": "Inesita",
            "email": "imcconnachie1@oaic.gov.au"
        },
        {
            "userId": "9e2895ae-4afe-4ff2-b3b3-be15cf1c82d6",
            "name": "Tulley",
            "email": "tbridywater2@wikimedia.org"
        },
        {
            "userId": "c7072fb5-cd2b-4703-8a58-328e5b7ed95a",
            "name": "Amelia",
            "email": "atondeur3@posterous.com"
        },
        {
            "userId": "22c29051-d301-4cc2-86dd-c19695408adb",
            "name": "Bucky",
            "email": "btompkin4@moonfruit.com"
        },
        {
            "userId": "6ac28937-bc05-4c0a-be7e-1a332e2de312",
            "name": "Sherline",
            "email": "sinston5@issuu.com"
        },
        {
            "userId": "552c1c73-e324-47ee-bf7f-b0dfbeb59788",
            "name": "Leontine",
            "email": "lchartres6@edublogs.org"
        },
        {
            "userId": "962c8a6b-c914-4aa4-93bc-2b91188a1a58",
            "name": "Cloris",
            "email": "cmorrall7@un.org"
        },
        {
            "userId": "35393a7a-f41b-4fe9-8901-fc39a8f803d6",
            "name": "Tobiah",
            "email": "trubinchik8@time.com"
        },
        {
            "userId": "9cf146a9-3da9-47fe-bcc3-3abdeb3a375d",
            "name": "Colet",
            "email": "cmincini9@dell.com"
        },
        {
            "userId": "4a6efba9-61a2-4829-abe6-dfed18484737",
            "name": "Van",
            "email": "vswaitea@imdb.com"
        },
        {
            "userId": "6718765e-123c-42d4-b2b3-efc029ff854e",
            "name": "Mella",
            "email": "mheartyb@sphinn.com"
        },
        {
            "userId": "0880eb85-2a08-4898-8aae-3cf90c48b08b",
            "name": "Karyl",
            "email": "kmatteic@live.com"
        },
        {
            "userId": "2977c5fe-22be-454a-80e1-5b93db92a371",
            "name": "Berrie",
            "email": "bnortcliffed@linkedin.com"
        },
        {
            "userId": "bd909a0b-f665-451a-a052-8e8111e796e3",
            "name": "Giselle",
            "email": "gsollitte@weibo.com"
        },
        {
            "userId": "26409ed7-15ac-4695-9813-be2afb6dad26",
            "name": "Niall",
            "email": "nrebeirof@netvibes.com"
        },
        {
            "userId": "80697f6f-69bc-4b03-82c0-40f48884f716",
            "name": "Afton",
            "email": "ajozaitisg@craigslist.org"
        },
        {
            "userId": "15d25fd9-32da-4ac7-b1b6-589a90a41dbf",
            "name": "Letisha",
            "email": "lgrimsdykeh@blogger.com"
        },
        {
            "userId": "0bd8b2b2-d67f-47dc-9acc-d2311006852b",
            "name": "Julio",
            "email": "jcuniami@weibo.com"
        },
        {
            "userId": "e83bae68-8104-4847-9f08-98206f35d100",
            "name": "Dana",
            "email": "dstrugnellj@51.la"
        },
        {
            "userId": "a4cf8f1f-8c61-404d-834d-220202358f91",
            "name": "Gertie",
            "email": "gmacrok@networkadvertising.org"
        },
        {
            "userId": "e091dbc4-0fc5-4823-9fc4-1cdded1fc5f4",
            "name": "Vidovik",
            "email": "vriddettl@usgs.gov"
        },
        {
            "userId": "e9ceef74-fb81-41e0-b52e-0089b978b2f3",
            "name": "Yancey",
            "email": "yfentemm@51.la"
        },
        {
            "userId": "9d82ca0e-cb41-4fba-a73f-acb7388e9d12",
            "name": "Lyndell",
            "email": "ldurninn@sciencedirect.com"
        },
        {
            "userId": "ecea4d11-d41e-468a-85d3-e80a193a5620",
            "name": "Heidie",
            "email": "hrackhamo@craigslist.org"
        },
        {
            "userId": "29232f0d-2423-406f-956b-00ddf9540ac8",
            "name": "Clem",
            "email": "cthorbonp@smugmug.com"
        },
        {
            "userId": "afd4a67e-83ba-4a62-9cdc-2fdc0c553b29",
            "name": "Paten",
            "email": "pblasdaleq@quantcast.com"
        },
        {
            "userId": "2a26982f-498f-4599-ab54-bc7469e2fbfd",
            "name": "Daisi",
            "email": "dsedgwickr@addthis.com"
        },
        {
            "userId": "c876a2cc-7528-4b61-837b-b7f7efc62cca",
            "name": "Sara-ann",
            "email": "sblundels@csmonitor.com"
        }
    ],
    expenses: [
        {
            "expenseId": "5c1121d7-20c8-4890-81c0-949bd60523a3",
            "category": "Salaries",
            "amount": 1489153.5,
            "timestamp": "2022-08-27T18:35:57Z"
        },
        {
            "expenseId": "4529aaef-39d0-4188-9256-8c8fd5bad7ca",
            "category": "Office",
            "amount": 1579039.97,
            "timestamp": "2020-05-12T19:39:50Z"
        },
        {
            "expenseId": "fca4f2d0-c3d7-4246-a04e-626ab4045c40",
            "category": "Office",
            "amount": 607415.3,
            "timestamp": "2021-06-08T13:48:10Z"
        },
        {
            "expenseId": "34de9517-153e-4505-9af8-dc8440e28dd9",
            "category": "Salaries",
            "amount": 171044.25,
            "timestamp": "2022-10-03T22:21:20Z"
        },
        {
            "expenseId": "c21c08e8-51b9-40f1-be37-b5116cd8d174",
            "category": "Salaries",
            "amount": 303743.89,
            "timestamp": "2020-03-18T00:41:00Z"
        },
        {
            "expenseId": "fb2dba2d-c186-4165-ab7d-66ce276041a4",
            "category": "Salaries",
            "amount": 1707710.31,
            "timestamp": "2020-05-04T20:18:41Z"
        },
        {
            "expenseId": "ba5ded78-639c-46ce-80bf-7d50642a1438",
            "category": "Office",
            "amount": 1375535.38,
            "timestamp": "2021-11-04T02:56:56Z"
        },
        {
            "expenseId": "c2f642b5-399b-48d7-9deb-e6a4eed0b9fa",
            "category": "Office",
            "amount": 858502.63,
            "timestamp": "2020-09-04T19:49:29Z"
        },
        {
            "expenseId": "fc8b38d8-388a-4898-9ca5-b942bbbec035",
            "category": "Professional",
            "amount": 1557261.18,
            "timestamp": "2020-07-22T02:35:40Z"
        },
        {
            "expenseId": "36764f05-d204-4f71-bbd3-9d0263ea6863",
            "category": "Salaries",
            "amount": 586616.74,
            "timestamp": "2021-01-18T01:06:07Z"
        },
        {
            "expenseId": "39e86828-36f4-4282-9599-bc4c42bae3a1",
            "category": "Office",
            "amount": 1677605.54,
            "timestamp": "2022-07-12T16:33:04Z"
        },
        {
            "expenseId": "66a3d687-05b0-4796-9b09-14941aa73031",
            "category": "Salaries",
            "amount": 1280249.59,
            "timestamp": "2021-09-09T05:45:26Z"
        },
        {
            "expenseId": "cfbd98f2-c6ed-4bcc-b604-f3d330c5f31e",
            "category": "Professional",
            "amount": 1851906.49,
            "timestamp": "2021-12-24T09:18:27Z"
        },
        {
            "expenseId": "c68ccd7e-601c-4b09-b76f-c5a19308e526",
            "category": "Salaries",
            "amount": 1791685.13,
            "timestamp": "2022-08-05T03:18:23Z"
        },
        {
            "expenseId": "3f19431c-3403-468b-9421-c9f54d466052",
            "category": "Salaries",
            "amount": 589917.71,
            "timestamp": "2021-05-19T17:43:00Z"
        }
    ],
    expenseByCategory: [
        {
            "expenseByCategoryId": "0e980d1b-ae93-4a5a-b235-4dfea5f42860",
            "expenseSummaryId": "5229a14b-443b-4551-9d01-4bc0dc820d05",
            "date": "2023-11-23T11:54:21Z",
            "category": "Office",
            "amount": 48
        },
        {
            "expenseByCategoryId": "076a4956-60c2-4b73-b275-530359a91cba",
            "expenseSummaryId": "c17ff164-1ab4-41e7-91a8-8aab790dcd88",
            "date": "2023-08-13T09:49:33Z",
            "category": "Salaries",
            "amount": 66
        },
        {
            "expenseByCategoryId": "27d49b13-1a3a-4fc7-924c-07147e4d08bd",
            "expenseSummaryId": "45ecf33b-6c3b-4e55-84ec-fa30b88aa03f",
            "date": "2023-07-24T09:26:56Z",
            "category": "Salaries",
            "amount": 63
        },
        {
            "expenseByCategoryId": "037fce5f-2c74-4f7a-a863-8cdd4db8a56b",
            "expenseSummaryId": "e495b850-cf2b-4b76-93c2-d4241c859cd0",
            "date": "2023-05-24T05:24:15Z",
            "category": "Salaries",
            "amount": 77
        },
        {
            "expenseByCategoryId": "abdb6c33-81ff-45dd-a653-ceae0783729d",
            "expenseSummaryId": "376f8d90-8b66-4cff-bd4e-2fcd14a42845",
            "date": "2023-05-07T12:33:09Z",
            "category": "Office",
            "amount": 67
        },
        {
            "expenseByCategoryId": "246326ac-b8b2-44ee-9f14-f54086aa6a00",
            "expenseSummaryId": "744bb795-0f98-45cd-99ae-45dddb99c3e4",
            "date": "2024-01-08T22:08:30Z",
            "category": "Salaries",
            "amount": 12
        },
        {
            "expenseByCategoryId": "760beed5-a14b-4e4b-9951-3ebe6f5842a1",
            "expenseSummaryId": "4a6a10e5-4f44-4aef-a1bd-c57075f3c44f",
            "date": "2023-06-11T08:03:25Z",
            "category": "Office",
            "amount": 57
        },
        {
            "expenseByCategoryId": "6c653ab9-2b4b-49be-b891-944f5ff98b85",
            "expenseSummaryId": "d62a1123-18b3-4784-bbdd-70a29f773f99",
            "date": "2023-07-10T00:15:57Z",
            "category": "Office",
            "amount": 34
        },
        {
            "expenseByCategoryId": "0636f954-6ef8-40b4-819f-fbfe4511be56",
            "expenseSummaryId": "ace2b05e-31de-48bd-a179-e59d16757456",
            "date": "2023-12-16T19:29:15Z",
            "category": "Salaries",
            "amount": 43
        },
        {
            "expenseByCategoryId": "86f616b9-3d68-4a04-b8e8-966a11ce1a78",
            "expenseSummaryId": "f24f6dd9-dd18-42f9-a76a-95d8198b7636",
            "date": "2023-07-04T04:49:15Z",
            "category": "Salaries",
            "amount": 62
        },
        {
            "expenseByCategoryId": "0381f4e7-08dc-4e10-8d8d-be02a3d1c16b",
            "expenseSummaryId": "2a2a88f0-0148-4667-8bab-7d129586bdf7",
            "date": "2023-10-18T18:41:07Z",
            "category": "Professional",
            "amount": 28
        },
        {
            "expenseByCategoryId": "55628026-8104-4d95-91f8-8062df421036",
            "expenseSummaryId": "560c166c-7093-4583-a007-5af2a88f1dab",
            "date": "2024-01-01T03:49:45Z",
            "category": "Office",
            "amount": 65
        },
        {
            "expenseByCategoryId": "44e1e4bc-462a-4b41-a1d2-a9997fa38ff8",
            "expenseSummaryId": "6faadd8d-5cdd-4b35-a3e8-cb0ada67de3a",
            "date": "2023-12-23T19:25:39Z",
            "category": "Salaries",
            "amount": 54
        },
        {
            "expenseByCategoryId": "ab27a324-088c-4bdc-8ce4-c67a6fbff088",
            "expenseSummaryId": "be4755fd-0f7c-4292-a0ad-539ad1371f6e",
            "date": "2023-03-15T12:50:41Z",
            "category": "Salaries",
            "amount": 97
        },
        {
            "expenseByCategoryId": "2e335aef-bb2e-401d-bda9-2c123e3031ad",
            "expenseSummaryId": "46a33080-d239-49b2-9f0a-5d2d576a3966",
            "date": "2023-04-23T21:27:57Z",
            "category": "Professional",
            "amount": 94
        },
        {
            "expenseByCategoryId": "5cdabf88-3c50-4519-bcc3-f9eb2abcfdc9",
            "expenseSummaryId": "40dd45c1-b575-48d1-b1a0-2bf474c8b591",
            "date": "2023-05-11T09:55:13Z",
            "category": "Salaries",
            "amount": 24
        },
        {
            "expenseByCategoryId": "bf128fb0-7c2f-45af-916e-4210d0b2c737",
            "expenseSummaryId": "4d452c32-21fd-4891-a5fe-aa481861e0ad",
            "date": "2023-06-16T16:48:42Z",
            "category": "Office",
            "amount": 59
        },
        {
            "expenseByCategoryId": "70157f83-2d78-43b0-85c0-9c955abdbbcd",
            "expenseSummaryId": "acd41481-9384-4ff1-8004-a3df027a0209",
            "date": "2023-09-30T05:02:44Z",
            "category": "Office",
            "amount": 54
        },
        {
            "expenseByCategoryId": "2f0fc0ff-11d6-4fa2-b930-84c1503fc4b6",
            "expenseSummaryId": "9b523e04-fdae-4b0b-a6d9-58ef64c75431",
            "date": "2023-07-03T22:12:16Z",
            "category": "Office",
            "amount": 25
        },
        {
            "expenseByCategoryId": "ce4b9e25-25fa-49ed-8711-0ec432e913e3",
            "expenseSummaryId": "4ada8077-3799-4690-ae35-c552e4100b1a",
            "date": "2023-08-23T11:48:59Z",
            "category": "Professional",
            "amount": 54
        },
        {
            "expenseByCategoryId": "4bc92339-cf13-4da5-bfc5-d201b4bce01f",
            "expenseSummaryId": "f6041c02-7b2a-4de3-8aed-81b82528ffe4",
            "date": "2023-09-14T06:41:32Z",
            "category": "Professional",
            "amount": 37
        },
        {
            "expenseByCategoryId": "0cf47f96-e01f-443e-a864-9dd94aa0916b",
            "expenseSummaryId": "d68b89d4-3332-4e29-8e5a-3c0483af6688",
            "date": "2023-06-11T13:00:11Z",
            "category": "Office",
            "amount": 96
        },
        {
            "expenseByCategoryId": "1629525c-9e25-4252-a55a-708eae10d62c",
            "expenseSummaryId": "9ef8296f-f2b3-4733-8664-7ef5e388734b",
            "date": "2024-01-03T17:10:35Z",
            "category": "Office",
            "amount": 85
        },
        {
            "expenseByCategoryId": "33579bc1-739f-4489-9a5c-1fdea6e1dec2",
            "expenseSummaryId": "c9a46c10-c426-4cbe-b805-83ab5d963e19",
            "date": "2023-08-20T13:33:02Z",
            "category": "Salaries",
            "amount": 55
        },
        {
            "expenseByCategoryId": "baf43dac-2563-4847-b756-a6c02cc17500",
            "expenseSummaryId": "8f70eaa2-fb78-4b32-bf2f-67c1e4988d2f",
            "date": "2023-12-23T06:16:20Z",
            "category": "Salaries",
            "amount": 7
        },
        {
            "expenseByCategoryId": "c3784dc2-03aa-48c0-aaa7-54ab2d3fb049",
            "expenseSummaryId": "f222583a-d003-44e1-920d-0f9743a873dc",
            "date": "2023-09-20T10:01:41Z",
            "category": "Professional",
            "amount": 90
        },
        {
            "expenseByCategoryId": "6e0372f9-0dba-4152-91f0-1c14f977b7a0",
            "expenseSummaryId": "0675c624-1e11-4df8-821f-9a2d744dba09",
            "date": "2023-09-02T16:42:29Z",
            "category": "Office",
            "amount": 99
        },
        {
            "expenseByCategoryId": "c011c90e-ccfb-4dd8-b4b3-1daf483d9cba",
            "expenseSummaryId": "abe1d0e1-65bf-49dc-801d-ba669aae8e33",
            "date": "2023-07-05T08:02:52Z",
            "category": "Salaries",
            "amount": 52
        },
        {
            "expenseByCategoryId": "2956f7b0-0526-4175-a596-7a8c22c4a6e1",
            "expenseSummaryId": "6aef1c35-a1c4-4a58-9be0-b6488a622eaa",
            "date": "2023-12-01T05:58:17Z",
            "category": "Professional",
            "amount": 71
        },
        {
            "expenseByCategoryId": "2fc8c8c4-e1b3-4bc3-86af-ec2d83ed8511",
            "expenseSummaryId": "43b606a2-45c6-4da4-85aa-f219aa6a2960",
            "date": "2023-08-29T13:03:56Z",
            "category": "Salaries",
            "amount": 4
        },
        {
            "expenseByCategoryId": "a4d61feb-528b-4314-8648-eb7c34c2303c",
            "expenseSummaryId": "db5b8de2-7dc0-4efe-a937-34e537a3f8ec",
            "date": "2023-09-24T19:24:50Z",
            "category": "Salaries",
            "amount": 7
        },
        {
            "expenseByCategoryId": "b2a808b4-bba5-4091-a6b4-ce0f7b917807",
            "expenseSummaryId": "b0760c67-c326-4f6d-9511-cb2b6896a11f",
            "date": "2023-03-29T09:33:35Z",
            "category": "Office",
            "amount": 48
        },
        {
            "expenseByCategoryId": "fcb238ba-dabc-4d93-9c34-aee8e305f866",
            "expenseSummaryId": "8404fc43-72be-4a3a-bf55-313256b0e083",
            "date": "2024-01-08T08:48:51Z",
            "category": "Professional",
            "amount": 15
        },
        {
            "expenseByCategoryId": "4cfa1c7f-b18a-41d9-9e79-55854f1269bf",
            "expenseSummaryId": "b149ef3b-f9cc-4560-ab29-4f74ec138c71",
            "date": "2024-03-08T11:57:57Z",
            "category": "Professional",
            "amount": 94
        },
        {
            "expenseByCategoryId": "a9f613be-6d9b-4ff0-8f26-37b71ed47274",
            "expenseSummaryId": "7e793e60-2edc-4adf-9d6f-bb6d09c93481",
            "date": "2024-02-15T10:50:32Z",
            "category": "Office",
            "amount": 94
        },
        {
            "expenseByCategoryId": "198e6bd4-9586-47fd-903d-aac56f99b61d",
            "expenseSummaryId": "e56345be-2ac9-4ca7-a9a2-1c59846381f7",
            "date": "2023-08-13T13:25:33Z",
            "category": "Salaries",
            "amount": 10
        },
        {
            "expenseByCategoryId": "9a86fea1-8b89-4f2f-829f-4406e530934d",
            "expenseSummaryId": "cdfd8bfd-1851-4cd1-ab5f-e66e7260ba92",
            "date": "2024-03-11T08:04:25Z",
            "category": "Office",
            "amount": 18
        },
        {
            "expenseByCategoryId": "3ad489e8-ce80-4ace-b5e8-732d226affd2",
            "expenseSummaryId": "eb8f9ea8-2cdb-4461-80fc-9dd571afb200",
            "date": "2023-08-26T01:40:17Z",
            "category": "Salaries",
            "amount": 82
        },
        {
            "expenseByCategoryId": "c8122a8a-498f-4504-97ed-e6361169099f",
            "expenseSummaryId": "1fe8f10b-24d0-4906-a66c-96ff7783671b",
            "date": "2024-02-03T20:08:28Z",
            "category": "Salaries",
            "amount": 95
        },
        {
            "expenseByCategoryId": "fc7e618a-c26c-42e3-8e38-e87469127c7e",
            "expenseSummaryId": "6cd41a74-4084-4e91-b009-5ab41730d258",
            "date": "2023-10-07T22:01:48Z",
            "category": "Office",
            "amount": 91
        },
        {
            "expenseByCategoryId": "a81be162-da70-43f0-a5d5-279f63bb1183",
            "expenseSummaryId": "d953877c-72d8-4189-8078-6ed4e46a23a4",
            "date": "2024-01-27T17:00:00Z",
            "category": "Salaries",
            "amount": 77
        },
        {
            "expenseByCategoryId": "dac98685-6d90-41ed-80ba-dded515cc3f0",
            "expenseSummaryId": "e328c686-7e18-41b3-92e2-e2ddaf3a4a31",
            "date": "2023-07-03T02:00:59Z",
            "category": "Professional",
            "amount": 62
        },
        {
            "expenseByCategoryId": "1241f3cf-99d8-4b84-b734-d60c3b53caad",
            "expenseSummaryId": "becde53e-60b5-40d1-be9c-27763057f3ac",
            "date": "2023-12-20T22:03:05Z",
            "category": "Salaries",
            "amount": 34
        },
        {
            "expenseByCategoryId": "c8f652dd-e8a6-4eb5-bc17-993d58ea1e10",
            "expenseSummaryId": "803d384f-69a9-450d-8ed3-96d202dbafcd",
            "date": "2023-08-05T04:51:45Z",
            "category": "Salaries",
            "amount": 87
        },
        {
            "expenseByCategoryId": "381c5e38-daae-473d-b32a-b1414106771a",
            "expenseSummaryId": "4749833f-3eaa-452f-bb28-209988f7918d",
            "date": "2024-01-15T07:35:22Z",
            "category": "Salaries",
            "amount": 12
        },
        {
            "expenseByCategoryId": "96e7aac8-5c4e-4a14-9106-a31913e601d0",
            "expenseSummaryId": "852af507-0551-41c8-9d95-a90ed9b1a07c",
            "date": "2023-03-15T14:01:06Z",
            "category": "Salaries",
            "amount": 88
        },
        {
            "expenseByCategoryId": "98ef7cce-68d9-4dee-bca0-804955502b83",
            "expenseSummaryId": "45718dc4-41ef-4a92-b270-3f7eb445fbef",
            "date": "2024-01-30T18:16:56Z",
            "category": "Salaries",
            "amount": 100
        },
        {
            "expenseByCategoryId": "a8fbd7bf-b3f0-4f75-8b5d-6f0a078bef37",
            "expenseSummaryId": "5763fb5e-a9b1-41a7-b873-0ecfad5c749c",
            "date": "2023-12-20T11:34:30Z",
            "category": "Office",
            "amount": 98
        },
        {
            "expenseByCategoryId": "5a34add7-30f1-4878-a0cc-e45556f5bfe9",
            "expenseSummaryId": "87122213-3ad3-418a-8914-5a35e01bb69b",
            "date": "2023-08-18T16:03:36Z",
            "category": "Professional",
            "amount": 78
        },
        {
            "expenseByCategoryId": "1dac299c-9b5a-4fb4-8ab5-fcdf6f9f0298",
            "expenseSummaryId": "10ec2f80-6da0-4909-b8fd-7c5cfdb7bef4",
            "date": "2023-08-06T08:45:27Z",
            "category": "Office",
            "amount": 12
        }
    ]
};
exports.default = sampleData;
