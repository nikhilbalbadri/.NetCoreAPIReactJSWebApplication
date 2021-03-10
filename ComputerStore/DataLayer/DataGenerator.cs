using ComputerStore.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace ComputerStore.DataLayer
{
    public class DataGenerator
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            //Creating In-Memory DB Data
            using (var context = new ComputerStoreDbContext(
                serviceProvider.GetRequiredService<DbContextOptions<ComputerStoreDbContext>>()))
            {
                context.Computers.AddRange(
                    new ComputerDetails { ComputerId = 01, ComputerName = "Dell", ComputerCost = 349.87 },
                    new ComputerDetails { ComputerId = 02, ComputerName = "Toshiba", ComputerCost = 345.67 },
                    new ComputerDetails { ComputerId = 03, ComputerName = "HP", ComputerCost = 456.76 },
                    new ComputerDetails { ComputerId = 04, ComputerName = "Lenovo", ComputerCost = 318.58 });
                context.Components.AddRange(
                    new ComponentDetails { ComponentId = 01, ComponentName = "8 GB Memory", ComponentCategory = "RAM", ComponentCost = 45.67 },
                    new ComponentDetails { ComponentId = 02, ComponentName = "16 GB Memory", ComponentCategory = "RAM", ComponentCost = 87.88 },
                    new ComponentDetails { ComponentId = 03, ComponentName = "500 GB HDD", ComponentCategory = "HDD", ComponentCost = 123.34 },
                    new ComponentDetails { ComponentId = 04, ComponentName = "1TB HDD", ComponentCategory = "HDD", ComponentCost = 200.00 },
                    new ComponentDetails { ComponentId = 05, ComponentName = "Red Colour", ComponentCategory = "Colour", ComponentCost = 50.76 },
                    new ComponentDetails { ComponentId = 06, ComponentName = "Blue Colour", ComponentCategory = "Colour", ComponentCost = 34.56 },
                    new ComponentDetails { ComponentId = 07, ComponentName = "Full HD Resolution", ComponentCategory = "Resolution", ComponentCost = 79.24 },
                    new ComponentDetails { ComponentId = 08, ComponentName = "Ultra HD Resolution", ComponentCategory = "Resolution", ComponentCost = 99.91 });
                context.SaveChanges();
            }
        }
    }
}
