//literal object 
let ScientificDepartment = {
    name: 'Astrophysics',
    Location: 'Building A',
    Address: {
        street: '123 Main Street',
        city: 'New York',
        zipCode: '30002'
        },
    
    display: function() {
        console.log(`Department: ${this.name}`);
        console.log(`Location: ${this.Location}`);
        console.log(`Address: ${this.Address.street}, ${this.Address.city}, ${this.Address.zipCode}`);
    }
}
ScientificDepartment.display();