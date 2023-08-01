import { createServer, Model } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
  let server = createServer({
    environment,

    models: {
      customer: Model,
    },

    seeds(server) {
      server.create('customer', {
        id: 1,
        name: 'John',
        pickUpLocation: 'Lagos',
        dropOffLocation: 'Ibadan',
      });

      server.create('customer', {
        id: 2,
        name: 'Smith',
        pickUpLocation: 'Kano',
        dropOffLocation: 'Kaduna',
      });

      
      server.create('customer', {
        id: 3,
        name: 'Johnson',
        pickUpLocation: 'Ojo',
        dropOffLocation: 'Lokoja',
      });

      server.create('customer', {
        id: 4,
        name: 'Tolu',
        pickUpLocation: 'Ajah',
        dropOffLocation: 'Lekki',
      });

      server.create('customer', {
        id: 5,
        name: 'Seyi',
        pickUpLocation: 'Sango',
        dropOffLocation: 'Lagos',
      });

      
    },

    routes() {
      this.namespace = 'api';

      this.get('/customers', (schema) => {
        return schema.db.customers;
      });

      this.put('/planner/:date', (schema, request) => {
        const { date } = request.params;
        const updatedPlanner = JSON.parse(request.requestBody);
        schema.db.planner.update(date, updatedPlanner);
        return updatedPlanner;
      });
    },
  });

  return server;
}
