# CSC3916 - Assignment 3

Simple Node.js API for movies with MongoDB integration and JWT authentication.

## Deployed Applications

- **React Frontend**: [https://csci3916-react19-zgx5.onrender.com](https://csci3916-react19-zgx5.onrender.com)
- **Backend API**: [https://csci3916-assignment3-0606.onrender.com](hhttps://csci3916-assignment3-0606.onrender.com)

## Features

- User signup/signin with JWT authentication
- Movie CRUD operations (all protected with JWT)
- MongoDB integration with proper Movie schema
- Error handling for duplicate users, validation, etc.

## Postman Collection

[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://god.gw.postman.com/run-collection/39694219-53f191f5-68e0-4fde-bc9e-9e827071416f?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D39694219-53f191f5-68e0-4fde-bc9e-9e827071416f%26entityType%3Dcollection%26workspaceId%3D569f717a-dd05-4684-b6f5-d59ba5d08496#?env%5BLE_HW3%5D=W3sia2V5IjoiQVBJX1VSTCIsInZhbHVlIjoiaHR0cHM6Ly9jc2NpMzkxNi1hc3NpZ25tZW50My0wNjA2Lm9ucmVuZGVyLmNvbSIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0Iiwic2Vzc2lvblZhbHVlIjoiaHR0cHM6Ly9jc2NpMzkxNi1hc3NpZ25tZW50My0wNjA2Lm9ucmVuZGVyLmNvbSIsImNvbXBsZXRlU2Vzc2lvblZhbHVlIjoiaHR0cHM6Ly9jc2NpMzkxNi1hc3NpZ25tZW50My0wNjA2Lm9ucmVuZGVyLmNvbSIsInNlc3Npb25JbmRleCI6MH0seyJrZXkiOiJhdXRoX3Rva2VuIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiZGVmYXVsdCIsInNlc3Npb25WYWx1ZSI6IkpXVC4uLiIsImNvbXBsZXRlU2Vzc2lvblZhbHVlIjoiSldUIGV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNklqWTNaV014TmpWa056aGtabVk1T0dJMllXUm1OMlV5TXlJc0luVnpaWEp1WVcxbElqb2lkR1Z6ZEhWelpYSmZNVGcyTUVCbGVHRnRjR3hsTG1OdmJTSXNJbTVoYldVaU9pSlVaWE4wSUZWelpYSWlMQ0pwWVhRaU9qRTNORE0xTWpVME56QXNJbVY0Y0NJNk1UYzBNelV5T1RBM01IMC5wRVA2SGw5Ym9tU3JxVmtMdFdKTWZjWDJaeGdubjNUU01pUVY0TElSRUVBIiwic2Vzc2lvbkluZGV4IjoxfSx7ImtleSI6InJhbmRvbV91c2VybmFtZSIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQiLCJzZXNzaW9uVmFsdWUiOiJ0ZXN0dXNlcl8xODYwQGV4YW1wbGUuY29tIiwiY29tcGxldGVTZXNzaW9uVmFsdWUiOiJ0ZXN0dXNlcl8xODYwQGV4YW1wbGUuY29tIiwic2Vzc2lvbkluZGV4IjoyfSx7ImtleSI6InJhbmRvbV9wYXNzd29yZCIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQiLCJzZXNzaW9uVmFsdWUiOiJQYXNzd29yZDQ0NjkiLCJjb21wbGV0ZVNlc3Npb25WYWx1ZSI6IlBhc3N3b3JkNDQ2OSIsInNlc3Npb25JbmRleCI6M30seyJrZXkiOiJ0b2tlbiIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImFueSIsInNlc3Npb25WYWx1ZSI6IiIsImNvbXBsZXRlU2Vzc2lvblZhbHVlIjoiIiwic2Vzc2lvbkluZGV4Ijo0fV0=)

## Notes for Grader

- The Movie schema includes all required fields (title, releaseDate, genre, actors)
- All routes are protected with JWT authentication
- Database has at least 5 sample movies
- Error handling is implemented for all edge cases
- React site supports signup and signin functionality


