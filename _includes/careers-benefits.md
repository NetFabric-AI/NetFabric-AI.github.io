<p class="mb-4">
    <!--<h3>What we offer</h3> -->
  <h2 class="title-sentence">
    <strong>Perks of joining us</strong> as an <br>
    early team member at a deep tech startup
  </h2>

    <div class="row row-cols-md-2 row-cols-1 g-4">
        {% for item in site.data.careers.benefits %}
        <div class="col">
            <div class="card h-100 mb-3">
                <div class="row g-0 align-items-center justify-content-center">
                <div class="col-md-3 col-6">
                    <img src="{{ site.baseurl }}/assets/images/{{ item.image }}" class="img-fluid rounded-start">
                </div>
                <div class="col-md-9 col-12">
                    <div class="card-body">
                        <strong class="card-title">{{ item.short | markdownify }}</strong>
                        <p class="card-text">{{ item.long | markdownify }}</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        {% endfor %}
    </div>
</p>

<!-- ### Benefits

- A fast-growing startup experience, flat hierarchy, great opportunity for professional growth
- Compensation package with stock options, market salary, and accident insurance
- Shape a platform that will revolutionize the monitoring possibilities for networks throughout the world -->
