import { BASE_URL } from "./constants";
import { BaseApiClient, RequestOption } from "./base";
import { LoginResponse } from "@/common/interfaces/login";
import { RefreshPayloadResponse } from "@/common/interfaces/token";
import { RegisterDto } from "@/common/dtos/register";
import { User } from "@/common/interfaces/user";
import { PaginatedResponse } from "@/common/interfaces/response";
import { getAccessToken } from "./authenticate";
import { DynamicObject } from "@/common/interfaces";
import { QueryTechiesDto } from "@/common/dtos/query";

export class ApiService extends BaseApiClient {
  getAccessToken: typeof getAccessToken = getAccessToken;

  constructor() {
    if (BASE_URL === undefined) {
      throw new Error("BASE_URL is undefined");
    }
    super(BASE_URL, {});
  }

  async login(email: string, password: string) {
    return this.post<LoginResponse>("/account/login", {
      body: {
        email,
        password,
      },
    });
  }

  async register(data: RegisterDto) {
    return this.post<User>("/account/register", {
      body: data,
    });
  }

  async verify_account(email: string, otp: string) {
    return this.post<User>("/account/validate-otp", {
      body: {
        email,
        otp,
      },
    });
  }

  authorize(data: RequestOption) {
    const tokens = this.getAccessToken();
    if (tokens == undefined) {
      throw new Error("Unauthorized");
    }
    return {
      ...data,
      headers: {
        Authorization: `Bearer ${tokens.access}`,
      },
    };
  }

  async refreshJwt(refresh: string) {
    return this.post<RefreshPayloadResponse>("/account/token/user/refresh", {
      body: { refresh },
    });
  }

  async find_techies(data: QueryTechiesDto) {
    const body = {
      query: data,
    };
    return this.get<PaginatedResponse<any>>(
      "/curriculum",
      this.authorize(body)
    );
  }

  async review(slug: string, body: { review: string; rating: string }) {
    return this.post<{ curriculum: string }>(
      "/curriculum/submit-review/{slug}",
      this.authorize({
        params: {
          slug,
        },
        body: {
          rating: parseInt(body.rating),
          review: body.review,
        },
      })
    );
  }
}

export const api = new ApiService();
