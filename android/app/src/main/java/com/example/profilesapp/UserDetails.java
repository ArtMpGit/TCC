package com.example.profilesapp;

public class UserDetails {
    private String login;
    private Long id;
    private String node_id;
    private String avatar_url;
    private String gravatar_id;
    private String url;
    private String html_url;
    private String followers_url;
    private String following_url;
    private String gists_url;
    private String starred_url;
    private String subscriptions_url;
    private String organizations_url;
    private String repos_url;
    private String events_url;
    private String received_events_url;
    private String type;
    private Boolean site_admin;
    private String name;
    private String company;
    private String blog;
    private String location;
    private String email;
    private Boolean hireable;
    private String bio;
    private String twitter_username;
    private Integer public_repos;
    private Integer public_gist;
    private Integer follower;
    private Integer following;
    private String created_at;
    private String updated_at;

    public UserDetails() { }

    public UserDetails(String login, String avatar_url, Integer follower, Integer following,
                       Integer public_repos, String created_at) {
        this.login = login;
        this.avatar_url = avatar_url;
        this.follower = follower;
        this.following = following;
        this.public_repos = public_repos;
        this.created_at = created_at;
    }

    public String getLogin() {
        return login;
    }

    public Long getId() {
        return id;
    }

    public String getNode_id() {
        return node_id;
    }

    public String getAvatar_url() {
        return avatar_url;
    }

    public String getGravatar_id() {
        return gravatar_id;
    }

    public String getUrl() {
        return url;
    }

    public String getHtml_url() {
        return html_url;
    }

    public String getFollowers_url() {
        return followers_url;
    }

    public String getFollowing_url() {
        return following_url;
    }

    public String getGists_url() {
        return gists_url;
    }

    public String getStarred_url() {
        return starred_url;
    }

    public String getSubscriptions_url() {
        return subscriptions_url;
    }

    public String getOrganizations_url() {
        return organizations_url;
    }

    public String getRepos_url() {
        return repos_url;
    }

    public String getEvents_url() {
        return events_url;
    }

    public String getReceived_events_url() {
        return received_events_url;
    }

    public String getType() {
        return type;
    }

    public Boolean getSite_admin() {
        return site_admin;
    }

    public String getName() {
        return name;
    }

    public String getCompany() {
        return company;
    }

    public String getBlog() {
        return blog;
    }

    public String getLocation() {
        return location;
    }

    public String getEmail() {
        return email;
    }

    public Boolean getHireable() {
        return hireable;
    }

    public String getBio() {
        return bio;
    }

    public String getTwitter_username() {
        return twitter_username;
    }

    public Integer getPublic_repos() {
        return public_repos;
    }

    public Integer getPublic_gist() {
        return public_gist;
    }

    public Integer getFollower() {
        return follower;
    }

    public Integer getFollowing() {
        return following;
    }

    public String getCreated_at() {
        return created_at;
    }

    public String getUpdated_at() {
        return updated_at;
    }
}
