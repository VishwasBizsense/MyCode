using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace CityInfo.API.Migrations
{
    /// <inheritdoc />
    public partial class InitialDataSeed : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Cities",
                columns: new[] { "Id", "Description", "Name" },
                values: new object[,]
                {
                    { 1, "The one with the big park", "New York City" },
                    { 2, "The one with Hollywood", "Los Angeles" },
                    { 3, "The windy city", "Chicago" },
                    { 4, "The space city", "Houston" },
                    { 5, "The sunny city", "Miami" },
                    { 6, "The rainy city", "Seattle" },
                    { 7, "The historic city", "Boston" },
                    { 8, "The tech city", "San Francisco" }
                });

            migrationBuilder.InsertData(
                table: "MustVisits",
                columns: new[] { "Id", "CityId", "Description", "Name" },
                values: new object[,]
                {
                    { 1, 1, "The most visited urban park in the US", "Central Park" },
                    { 2, 1, "A symbol of freedom and democracy", "Statue of Liberty" },
                    { 3, 2, "Iconic sidewalk with stars honoring famous celebrities", "Hollywood Walk of Fame" },
                    { 4, 2, "Popular film studio and theme park", "Universal Studios Hollywood" },
                    { 5, 3, "A public park featuring the famous Cloud Gate sculpture", "Millennium Park" },
                    { 6, 3, "A popular tourist destination with shops, restaurants, and attractions", "Navy Pier" },
                    { 7, 4, "Visitor center for NASA's Johnson Space Center", "Space Center Houston" },
                    { 8, 4, "A collection of museums, galleries, and cultural centers", "Houston Museum District" },
                    { 9, 5, "Famous for its beaches, nightlife, and Art Deco architecture", "South Beach" },
                    { 10, 5, "A vast wilderness with unique ecosystems and wildlife", "Everglades National Park" },
                    { 11, 6, "Iconic observation tower with panoramic views of the city", "Space Needle" },
                    { 12, 6, "Historic market with shops, restaurants, and a famous fish market", "Pike Place Market" },
                    { 13, 7, "A walking trail that passes by 16 historic sites", "Freedom Trail" },
                    { 14, 7, "One of the world's most prestigious universities", "Harvard University" },
                    { 15, 8, "An iconic suspension bridge spanning the Golden Gate strait", "Golden Gate Bridge" },
                    { 16, 8, "A historic prison turned tourist attraction", "Alcatraz Island" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "MustVisits",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "MustVisits",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "MustVisits",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "MustVisits",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "MustVisits",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "MustVisits",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "MustVisits",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "MustVisits",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "MustVisits",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "MustVisits",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "MustVisits",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "MustVisits",
                keyColumn: "Id",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "MustVisits",
                keyColumn: "Id",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "MustVisits",
                keyColumn: "Id",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "MustVisits",
                keyColumn: "Id",
                keyValue: 15);

            migrationBuilder.DeleteData(
                table: "MustVisits",
                keyColumn: "Id",
                keyValue: 16);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 8);
        }
    }
}
