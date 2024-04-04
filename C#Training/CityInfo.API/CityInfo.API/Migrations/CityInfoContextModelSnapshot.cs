﻿// <auto-generated />
using System;
using CityInfo.API.DbContexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace CityInfo.API.Migrations
{
    [DbContext(typeof(CityInfoContext))]
    partial class CityInfoContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "8.0.3");

            modelBuilder.Entity("CityInfo.API.Entities.City", b =>
                {
                    b.Property<int?>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Description")
                        .HasMaxLength(200)
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Cities");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Description = "The one with the big park",
                            Name = "New York City"
                        },
                        new
                        {
                            Id = 2,
                            Description = "The one with Hollywood",
                            Name = "Los Angeles"
                        },
                        new
                        {
                            Id = 3,
                            Description = "The windy city",
                            Name = "Chicago"
                        },
                        new
                        {
                            Id = 4,
                            Description = "The space city",
                            Name = "Houston"
                        },
                        new
                        {
                            Id = 5,
                            Description = "The sunny city",
                            Name = "Miami"
                        },
                        new
                        {
                            Id = 6,
                            Description = "The rainy city",
                            Name = "Seattle"
                        },
                        new
                        {
                            Id = 7,
                            Description = "The historic city",
                            Name = "Boston"
                        },
                        new
                        {
                            Id = 8,
                            Description = "The tech city",
                            Name = "San Francisco"
                        });
                });

            modelBuilder.Entity("CityInfo.API.Entities.MustVisit", b =>
                {
                    b.Property<int?>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("CityId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Description")
                        .HasMaxLength(200)
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("CityId");

                    b.ToTable("MustVisits");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            CityId = 1,
                            Description = "The most visited urban park in the US",
                            Name = "Central Park"
                        },
                        new
                        {
                            Id = 2,
                            CityId = 1,
                            Description = "A symbol of freedom and democracy",
                            Name = "Statue of Liberty"
                        },
                        new
                        {
                            Id = 3,
                            CityId = 2,
                            Description = "Iconic sidewalk with stars honoring famous celebrities",
                            Name = "Hollywood Walk of Fame"
                        },
                        new
                        {
                            Id = 4,
                            CityId = 2,
                            Description = "Popular film studio and theme park",
                            Name = "Universal Studios Hollywood"
                        },
                        new
                        {
                            Id = 5,
                            CityId = 3,
                            Description = "A public park featuring the famous Cloud Gate sculpture",
                            Name = "Millennium Park"
                        },
                        new
                        {
                            Id = 6,
                            CityId = 3,
                            Description = "A popular tourist destination with shops, restaurants, and attractions",
                            Name = "Navy Pier"
                        },
                        new
                        {
                            Id = 7,
                            CityId = 4,
                            Description = "Visitor center for NASA's Johnson Space Center",
                            Name = "Space Center Houston"
                        },
                        new
                        {
                            Id = 8,
                            CityId = 4,
                            Description = "A collection of museums, galleries, and cultural centers",
                            Name = "Houston Museum District"
                        },
                        new
                        {
                            Id = 9,
                            CityId = 5,
                            Description = "Famous for its beaches, nightlife, and Art Deco architecture",
                            Name = "South Beach"
                        },
                        new
                        {
                            Id = 10,
                            CityId = 5,
                            Description = "A vast wilderness with unique ecosystems and wildlife",
                            Name = "Everglades National Park"
                        },
                        new
                        {
                            Id = 11,
                            CityId = 6,
                            Description = "Iconic observation tower with panoramic views of the city",
                            Name = "Space Needle"
                        },
                        new
                        {
                            Id = 12,
                            CityId = 6,
                            Description = "Historic market with shops, restaurants, and a famous fish market",
                            Name = "Pike Place Market"
                        },
                        new
                        {
                            Id = 13,
                            CityId = 7,
                            Description = "A walking trail that passes by 16 historic sites",
                            Name = "Freedom Trail"
                        },
                        new
                        {
                            Id = 14,
                            CityId = 7,
                            Description = "One of the world's most prestigious universities",
                            Name = "Harvard University"
                        },
                        new
                        {
                            Id = 15,
                            CityId = 8,
                            Description = "An iconic suspension bridge spanning the Golden Gate strait",
                            Name = "Golden Gate Bridge"
                        },
                        new
                        {
                            Id = 16,
                            CityId = 8,
                            Description = "A historic prison turned tourist attraction",
                            Name = "Alcatraz Island"
                        });
                });

            modelBuilder.Entity("CityInfo.API.Entities.MustVisit", b =>
                {
                    b.HasOne("CityInfo.API.Entities.City", "City")
                        .WithMany("MustVisits")
                        .HasForeignKey("CityId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("City");
                });

            modelBuilder.Entity("CityInfo.API.Entities.City", b =>
                {
                    b.Navigation("MustVisits");
                });
#pragma warning restore 612, 618
        }
    }
}
