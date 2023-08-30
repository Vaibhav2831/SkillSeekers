package com.cdac.dayToDayServices.models;

public class ChangePasswordRequest {
	private int userId;
	private String newPassword;
	private String oldPassword;

	public ChangePasswordRequest() {
		// TODO Auto-generated constructor stub
	}

	public ChangePasswordRequest(int userId, String newPassword, String oldPassword) {
		this.userId = userId;
		this.newPassword = newPassword;
		this.oldPassword = oldPassword;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getNewPassword() {
		return newPassword;
	}

	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}

	public String getOldPassword() {
		return oldPassword;
	}

	public void setOldPassword(String oldPassword) {
		this.oldPassword = oldPassword;
	}

	@Override
	public String toString() {
		return String.format("ChangePasswordRequest [userId=%s, newPassword=%s, oldPassword=%s]", userId, newPassword,
				oldPassword);
	}

}
