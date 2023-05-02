import { expect, test } from 'vitest'
import { toMatchImageSnapshot } from 'jest-image-snapshot'
import {
    Accordion,
    Button,
    Input
} from "../index";
import puppeteer from "puppeteer";
import { renderToStaticMarkup } from 'react-dom/server';

expect.extend({toMatchImageSnapshot}); // Устраняет Invalid Chai property: toMatchImageSnapshot

test('button', async () => {
    const html = renderToStaticMarkup(<Button>Кнопище</Button>);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html);
    const result = await page.screenshot();
    expect(result).toMatchImageSnapshot('./test/');
});

test('Input', async () => {
    const html = renderToStaticMarkup(<Input />);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html);
    const result = await page.screenshot();
    expect(result).toMatchImageSnapshot('./test/');
});

test('Accordion', async () => {
    const html = renderToStaticMarkup(<Accordion title='Testing'><h4>Content</h4></Accordion>);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html);
    const result = await page.screenshot();
    expect(result).toMatchImageSnapshot('./test/');
});
