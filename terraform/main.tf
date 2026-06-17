provider "kubernetes" {
  config_path = "~/.kube/config"
}

resource "kubernetes_deployment" "nodejs_app" {
  metadata {
    name = "nodejs-app"
    labels = {
      app = "nodejs"
    }
  }

  spec {
    replicas = 1

    selector {
      match_labels = {
        app = "nodejs"
      }
    }

    template {
      metadata {
        labels = {
          app = "nodejs"
        }
      }

      spec {
        container {
          name  = "nodejs-container"
          image = "ghcr.io/letsdevapps/nodejs-express-rest:latest"

          image_pull_policy = "Always"

          port {
            container_port = 3000
          }
        }
      }
    }
  }
}

resource "kubernetes_service" "nodejs_service" {
  metadata {
    name = "nodejs-service"
  }

  spec {
    selector = {
      app = "nodejs"
    }

    port {
      port        = 3000
      target_port = 3000
    }

    type = "NodePort"
  }
}

resource "kubernetes_ingress_v1" "app_ingress" {
  metadata {
    name = "app-ingress"

    annotations = {
      "nginx.ingress.kubernetes.io/rewrite-target" = "/"
    }
  }

  spec {
    ingress_class_name = "nginx"

    rule {
      http {
        path {
          path      = "/node"
          path_type = "Prefix"

          backend {
            service {
              name = kubernetes_service.nodejs_service.metadata[0].name
              port {
                number = 3000
              }
            }
          }
        }
      }
    }
  }
}

