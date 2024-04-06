using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ERP.HR
{
    internal class StoreManager :Employee
    {

        private string? _storeLocation;

        public string? StoreLocation
        {
            get { return _storeLocation; }
            set { _storeLocation = value; }
        }

        public StoreManager(string first, string last, string em, DateTime bd) : base(first, last, em, bd)
        {
            // No need to initialize StoreLocation here, as it's already nullable
        }

        public StoreManager(string first, string last, string em, DateTime bd, double rate, string? location)
            : base(first, last, em, bd, rate)
        {
            StoreLocation = location;
        }
    }
}
