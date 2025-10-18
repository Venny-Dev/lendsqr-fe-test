const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

interface ApiResponse<T = any> {
  data: T;
  message: string;
}

interface RequestOptions extends RequestInit {
  headers?: Record<string, string>;
}

class ApiClient {
  async request<T = any>(
    endpoint: string,
    options: RequestOptions = {}
  ): Promise<ApiResponse<T>> {
    const url = `${API_BASE_URL}${endpoint}`;

    const config: RequestOptions = {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    };

    try {
      const res = await fetch(url, config);

      const data = await res.json();

      if (!res.ok) {
        const error = new Error(
          data.errors[0] || data.message || "Something went wrong"
        ) as Error & { status: number };
        error.status = res.status;
        throw error;
      }
      // console.log(data);

      return data;
    } catch (err) {
      if (err instanceof Error && "status" in err) {
        throw err;
      }
      throw new Error(err instanceof Error ? err.message : String(err));
    }
  }

  get<T = any>(
    endpoint: string,
    options: RequestOptions = {}
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: "GET" });
  }

  post<T = any>(
    endpoint: string,
    body?: any,
    options: RequestOptions = {}
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: "POST", body });
  }

  patch<T = any>(
    endpoint: string,
    body?: any,
    options: RequestOptions = {}
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: "PATCH", body });
  }
  put<T = any>(
    endpoint: string,
    body?: any,
    options: RequestOptions = {}
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...options,
      method: "PUT",
      body: JSON.stringify(body),
    });
  }
  delete<T = any>(
    endpoint: string,
    options: RequestOptions = {}
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: "DELETE" });
  }
}

const api = new ApiClient();
export default api;
