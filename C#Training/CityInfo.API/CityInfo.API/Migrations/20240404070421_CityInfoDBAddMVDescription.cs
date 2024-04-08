﻿using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CityInfo.API.Migrations
{
    /// <inheritdoc />
    public partial class CityInfoDBAddMVDescription : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "MustVisits",
                type: "TEXT",
                maxLength: 200,
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "MustVisits");
        }
    }
}