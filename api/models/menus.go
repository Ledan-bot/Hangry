package models

type Menu struct {
	Name          string         `json:"name"`
	Entrees       []*Entree      `json:"entrees"`
	Sides         []*Side        `json:"sides"`
	Drinks        []*Drink       `json:"drinks"`
	Desserts      []*Dessert     `json:"desserts"`
	Appetizers    []*Appetizer   `json:"appetizers"`
	Chef          *Chef          `json:"chef"`
	Tags          []*Tag         `json:"tags"`
	Miscellaneous *Miscellaneous `json:"miscellaneous"`
	Image         string         `json:"image"`
}

type Entree struct {
	Name                 string   `json:"name"`
	Price                float64  `json:"price"`
	Dietary_restrictions []string `json:"dietary_restrictions"`
}

type Side struct {
	Name                 string   `json:"name"`
	Price                float64  `json:"price"`
	Dietary_restrictions []string `json:"dietary_restrictions"`
}

type Drink struct {
	Name  string  `json:"name"`
	Price float64 `json:"price"`
}

type Dessert struct {
	Name  string  `json:"name"`
	Price float64 `json:"price"`
}

type Appetizer struct {
	Name  string  `json:"name"`
	Price float64 `json:"price"`
}

type Chef struct {
	Name        string `json:"name"`
	Description string `json:"description"`
	Image       string `json:"image"`
}

type Tag struct {
	Tag string `json:"tag"`
}

type Miscellaneous struct {
	Stars         float64 `json:"stars"`
	Average_price float64 `json:"average_price"`
}
