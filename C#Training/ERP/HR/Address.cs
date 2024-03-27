using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ERP.HR
{
    public class Address
    {
        public string Street { get; set; }
        public string HouseNumber { get; set; }
        public string ZipCode { get; set; }
        public string City { get; set; }

        public Address(string street, string houseNumber, string zipCode, string city)
        {
            Street = street;
            HouseNumber = houseNumber;
            ZipCode = zipCode;
            City = city;
        }
    }
}
