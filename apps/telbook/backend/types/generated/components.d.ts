import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentPartsLead extends Schema.Component {
  collectionName: 'components_content_parts_leads';
  info: {
    displayName: 'lead';
    description: '';
  };
  attributes: {
    lead: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 160;
        maxLength: 300;
      }>;
  };
}

export interface ContentPartsMaps extends Schema.Component {
  collectionName: 'components_content_parts_maps';
  info: {
    displayName: 'GoogleMaps';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
  };
}

export interface ContentPartsMedia extends Schema.Component {
  collectionName: 'components_content_parts_media';
  info: {
    displayName: 'media';
    description: '';
  };
  attributes: {
    media: Attribute.Media & Attribute.Required;
  };
}

export interface ContentPartsQuote extends Schema.Component {
  collectionName: 'components_content_parts_quotes';
  info: {
    displayName: 'quote';
    description: '';
  };
  attributes: {
    quote: Attribute.Text & Attribute.Required;
  };
}

export interface ContentPartsTxt extends Schema.Component {
  collectionName: 'components_content_parts_txts';
  info: {
    displayName: 'txt';
    description: '';
  };
  attributes: {
    txt: Attribute.RichText & Attribute.Required;
  };
}

export interface ContentPartsYouTube extends Schema.Component {
  collectionName: 'components_content_parts_you_tubes';
  info: {
    displayName: 'gallery';
    description: '';
  };
  attributes: {
    gallery: Attribute.Media & Attribute.Required;
  };
}

export interface ContentPartsYoutube extends Schema.Component {
  collectionName: 'components_content_parts_youtubes';
  info: {
    displayName: 'youtube';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
  };
}

export interface OthersCover extends Schema.Component {
  collectionName: 'components_others_covers';
  info: {
    displayName: 'cover';
    description: '';
  };
  attributes: {
    cover: Attribute.Media;
    typ: Attribute.Enumeration<['danger', 'default', 'error', 'success', 'warning']>;
  };
}

export interface OthersEmail extends Schema.Component {
  collectionName: 'components_others_emails';
  info: {
    displayName: 'email';
    description: '';
  };
  attributes: {
    email: Attribute.Email & Attribute.Required;
  };
}

export interface OthersFormat extends Schema.Component {
  collectionName: 'components_others_formats';
  info: {
    displayName: 'format';
    icon: 'phone';
  };
  attributes: {
    format: Attribute.String & Attribute.Required & Attribute.Unique;
  };
}

export interface OthersPhone extends Schema.Component {
  collectionName: 'components_others_phones';
  info: {
    displayName: 'phone';
    description: '';
  };
  attributes: {
    phone: Attribute.String & Attribute.Required;
    typ: Attribute.Enumeration<['mobile', 'home', 'fax']>;
  };
}

export interface OthersSeo extends Schema.Component {
  collectionName: 'components_others_seos';
  info: {
    displayName: 'SEO';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface StatsViews extends Schema.Component {
  collectionName: 'components_stats_views';
  info: {
    displayName: 'views';
    description: '';
  };
  attributes: {
    views: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<1>;
    date: Attribute.Date;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content-parts.lead': ContentPartsLead;
      'content-parts.maps': ContentPartsMaps;
      'content-parts.media': ContentPartsMedia;
      'content-parts.quote': ContentPartsQuote;
      'content-parts.txt': ContentPartsTxt;
      'content-parts.you-tube': ContentPartsYouTube;
      'content-parts.youtube': ContentPartsYoutube;
      'others.cover': OthersCover;
      'others.email': OthersEmail;
      'others.format': OthersFormat;
      'others.phone': OthersPhone;
      'others.seo': OthersSeo;
      'stats.views': StatsViews;
    }
  }
}
