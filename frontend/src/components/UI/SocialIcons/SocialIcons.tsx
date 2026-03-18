import React from 'react';
import { Group } from '@mantine/core';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const socialLinks = [
  {
    url: 'https://www.facebook.com/',
    icon: IconBrandFacebook,
    color: 'hover:text-blue-500',
  },
  {
    url: 'https://www.instagram.com/',
    icon: IconBrandInstagram,
    color: 'hover:text-pink-500',
  },
  {
    url: 'https://www.twitter.com/',
    icon: IconBrandX,
    color: 'hover:text-sky-500',
  },
];

const SocialIcons = ({ className }: { className?: string }) => (
  <Group gap="xs" className={className}>
    {socialLinks.map((link, index) => (
      <Link
        key={index}
        to={link.url}
        className={`${link.color} transition-transform transform hover:scale-110`}
      >
        <link.icon />
      </Link>
    ))}
  </Group>
);

export default SocialIcons;
