import request from 'supertest';
import server from "../../app";

describe('test API', ()=>{
  test('test external function', async () => {
      const { status } = await request(server).get('/api/users/');     
      
      expect(status).toBe(200);
  })
})

afterAll(async()=>{
  server.close();
})
