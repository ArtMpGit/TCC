package com.example.profilesapp.ui.user_detail;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.app.ActionBar;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.view.MenuItem;
import android.widget.ImageView;
import android.widget.TextView;

import com.example.profilesapp.MainActivity;
import com.example.profilesapp.R;
import com.example.profilesapp.User;
import com.example.profilesapp.UserAdapter;
import com.example.profilesapp.UserDetails;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.squareup.picasso.Picasso;

import java.io.IOException;
import java.util.ArrayList;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class UserDetailActivity extends AppCompatActivity {

    ImageView imageView;
    TextView userNameTextView, followersTextView, followingTextView, reposTextView, creationDateTextView;

    String userName;
    UserDetails user;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_user_detail);

        imageView = this.findViewById(R.id.userDetailAvatar);
        userNameTextView = this.findViewById(R.id.userDetailName);
        followersTextView = this.findViewById(R.id.userDetailFollowers);
        followingTextView = this.findViewById(R.id.userDetailFollowing);
        creationDateTextView = this.findViewById(R.id.userDetailCreation);
        reposTextView = this.findViewById(R.id.userDetailRepos);

        Intent intent = getIntent();
        userName = intent.getStringExtra("userName");

        getSupportActionBar().setTitle(userName);
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);

        OkHttpClient client = new OkHttpClient();
        HttpUrl url = HttpUrl.parse("https://api.github.com/users/" + userName).newBuilder()
                .build();
        Request request = new Request.Builder().url(url).build();
        client.newCall(request).enqueue(new Callback() {
            @Override
            public void onFailure(Call call, IOException e) {
                e.printStackTrace();
            }

            @Override
            public void onResponse(Call call, Response response) throws IOException {
                if (response.isSuccessful()) {
                    String body = response.body().string();
                    Gson gson = new Gson();
                    user = gson.fromJson(body, new TypeToken<UserDetails>(){}.getType());
                    System.out.println(body);

                    new Handler(Looper.getMainLooper()).post(() -> {
                        Picasso.get().load(user.getAvatar_url()).into(imageView);
                    });
                    userNameTextView.setText("Nome: " + user.getLogin());
                    followersTextView.setText("Qtd. seguidores: " + user.getFollower());
                    followingTextView.setText("Seguindo: " + user.getFollowing());
                    reposTextView.setText("Qtd. Repositórios: " + user.getPublic_repos());
                    creationDateTextView.setText("Criado em: " + user.getCreated_at());
                }
            }
        });
    }

    public boolean onOptionsItemSelected(MenuItem item){
        Intent myIntent = new Intent(getApplicationContext(), MainActivity.class);
        startActivityForResult(myIntent, 0);
        return true;
    }
}