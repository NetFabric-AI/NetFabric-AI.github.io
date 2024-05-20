---
layout: default
title: Careers
---


## Open Positions

<p>
    <ul class="list-group">
    {% for job in site.jobs %}
        <li class="list-group-item">
            <a href="{{job.link}}">{{ job.title }}</a>
        </li>
    {% endfor %}
    </ul>
</p>

We are always looking for talented people, so feel free to send us an email to
<mail to="careers" addBody="true"></mail> or let us update you by
registering [here](/contact).

## About us

NetFabric is a startup building a platform for unlocking real-time reasoning & Artificial Intelligence for IT Operations (AIOps) across all aspects of data networks. Our technology pushes the frontiers of network understanding and reasoning across data sources.

We are building up a strong team with great people including serial
entrepreneurs, ETH PhD holders, and ETH professors.
