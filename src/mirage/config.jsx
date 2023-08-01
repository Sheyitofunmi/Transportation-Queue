export default function config() {
    this.namespace = 'api';
  
    this.get('/customers', (schema) => {
      return schema.db.customers;
    });
  
    this.post('/planner/:date', (schema, request) => {
      const { date } = request.params;
      const updatedPlanner = JSON.parse(request.requestBody);
      schema.db.planner.save(date, updatedPlanner);
      return updatedPlanner;
    });
  
  
    this.put('/planner/:date', (schema, request) => {
      const { date } = request.params;
      const updatedPlanner = JSON.parse(request.requestBody);
      schema.db.planner.update(date, updatedPlanner);
      return updatedPlanner;
    });
  }
  