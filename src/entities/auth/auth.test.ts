import request from 'supertest';
import server from "../../app";

describe('test API', ()=>{
  test('test external function', async () => {    
      const {status, body} = await request(server)
        .post('/api/auth/login/')
        .send(
          {
            email: "fidel@fidel.com",
            password: "12345"
          }
        )
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
      
      expect(status).toBe(200);
      expect(body.success).toBe(true)
  })
})

afterAll(async()=>{
  server.close();
})