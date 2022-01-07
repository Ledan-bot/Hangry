package models

type Log struct {
	IPAdress     string `json:"ip_address"`
	TimeStamp    string `json:"time_stamp"`
	Method       string `json:"method"`
	Path         string `json:"path"`
	StatusCode   int    `json:"status_code"`
	Latency      string `json:"latency"`
	UserAgent    string `json:"user_agent"`
	ErrorMessage string `json:"error_message"`
}
