import http from 'k6/http';
import { sleep } from 'k6';


export let options = {
  vus: 100,
  duration: '30s',
};

export default function() {
  http.get('http://localhost:8080/api/product/9');
  sleep(1);
}