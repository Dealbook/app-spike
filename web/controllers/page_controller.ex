defmodule AppSpike.PageController do
  use AppSpike.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
