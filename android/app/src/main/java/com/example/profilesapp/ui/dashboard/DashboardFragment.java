package com.example.profilesapp.ui.dashboard;

import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.Observer;
import androidx.lifecycle.ViewModelProvider;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.profilesapp.MainActivity;
import com.example.profilesapp.R;
import com.example.profilesapp.User;
import com.example.profilesapp.UserAdapter;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import java.io.IOException;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;

import static android.content.ContentValues.TAG;

public class DashboardFragment extends Fragment {

    ArrayList<User> users;

    public View onCreateView(@NonNull LayoutInflater inflater,
                             ViewGroup container, Bundle savedInstanceState) {

        View root = inflater.inflate(R.layout.fragment_dashboard, container, false);

        /* Bloco de código responsável por realizar a requisição HTTP para buscar as informações
        * Que serão apresentadas na listagem de usuários*/
        OkHttpClient client = new OkHttpClient();
        HttpUrl url = HttpUrl.parse("https://api.github.com/users").newBuilder()
                .addQueryParameter("per_page", "100")
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
                    /* Nessa linha a lib Gson é responsável por pegar a resposta da API e passar de um JSON
                    * Para um ArrayList de User */
                    users = gson.fromJson(body, new TypeToken<ArrayList<User>>(){}.getType());

                    /* Bloco de código responsável por setar no RecyclerView as informações do array
                    * de usuários retornado da API para que as mesmas sejam renderizadas na tela*/
                    getActivity().runOnUiThread(new Runnable() {
                        @Override
                        public void run() {
                            RecyclerView recyclerView = root.findViewById(R.id.recyclerView);
                            recyclerView.setHasFixedSize(true);
                            recyclerView.setAdapter(new UserAdapter(users, getActivity()));
                            recyclerView.setLayoutManager(new LinearLayoutManager(getActivity()));
                        }
                    });

                    MainActivity main = (MainActivity) getActivity();
                    getActivity().runOnUiThread(new Runnable() {
                        @Override
                        public void run() {

                        }
                    });
                }
            }
        });

        return root;
    }
}