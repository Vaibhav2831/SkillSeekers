package com.cdac.dayToDayServices.models;

public class SearchRequest {
	private String searchRequestString;

	public SearchRequest() {
		// TODO Auto-generated constructor stub
	}

	public SearchRequest(String searchRequestString) {
		this.searchRequestString = searchRequestString;
	}

	public String getSearchRequestString() {
		return searchRequestString;
	}

	public void setSearchRequestString(String searchRequestString) {
		this.searchRequestString = searchRequestString;
	}

	@Override
	public String toString() {
		return String.format("SearchRequest [searchRequestString=%s]", searchRequestString);
	}

}
