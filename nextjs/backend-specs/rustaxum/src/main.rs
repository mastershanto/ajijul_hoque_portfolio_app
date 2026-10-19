// ============================================================================
// Rust 2024 / Axum - Zero-Cost Memory-Safe Asynchronous Engine
// ============================================================================

use axum::{
    extract::Query,
    http::{HeaderValue, Method, StatusCode},
    response::{IntoResponse, Json},
    routing::{get, post},
    Router,
};
use serde::{Deserialize, Serialize};
use std::net::SocketAddr;
use tower_http::cors::{Any, CorsLayer};

#[derive(Serialize)]
struct ProfileResponse {
    id: &'static str,
    name: &'static str,
    title: &'static str,
    bio_summary: &'static str,
}

#[derive(Deserialize)]
struct ContactRequest {
    name: String,
    email: String,
    message: String,
}

#[derive(Serialize)]
struct ContactResponse {
    success: bool,
    message_id: String,
    timestamp: String,
}

async fn get_profile_handler() -> Json<ProfileResponse> {
    Json(ProfileResponse {
        id: "ajijul-hoque-profile",
        name: "Ajijul Hoque",
        title: "AI Systems Architect & Full-Stack Engineer",
        bio_summary: "High-performance memory-safe distributed systems & multi-agent swarms.",
    })
}

async fn post_contact_handler(
    Json(payload): Json<ContactRequest>,
) -> Result<Json<ContactResponse>, StatusCode> {
    if payload.name.trim().is_empty() || payload.email.trim().is_empty() {
        return Err(StatusCode::BAD_REQUEST);
    }
    Ok(Json(ContactResponse {
        success: true,
        message_id: format!("msg-rust-{}", chrono::Utc::now().timestamp_millis()),
        timestamp: chrono::Utc::now().to_rfc3339(),
    }))
}

#[tokio::main]
async fn main() {
    let cors = CorsLayer::new()
        .allow_origin(Any)
        .allow_methods([Method::GET, Method::POST])
        .allow_headers(Any);

    let app = Router::new()
        .route("/api/v1/profile", get(get_profile_handler))
        .route("/api/v1/contact", post(post_contact_handler))
        .layer(cors);

    let addr = SocketAddr::from(([0, 0, 0, 0], 3000));
    println!("Rust Axum server listening on {}", addr);
    let listener = tokio::net::TcpListener::bind(addr).await.unwrap();
    axum::serve(listener, app).await.unwrap();
}
