import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, ChangeDetectorRef, inject } from '@angular/core';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './home.html',
    styleUrl: './home.scss',
})
export class Home implements OnInit, OnDestroy {
    tearStyle: Record<string, string> = {};
    private tearInterval: ReturnType<typeof setInterval> | undefined;
    private flickerTimeout: ReturnType<typeof setTimeout> | undefined;
    private cdr = inject(ChangeDetectorRef);

    ngOnInit(): void {
        this.startTearCycle();
    }

    ngOnDestroy(): void {
        if (this.tearInterval) clearInterval(this.tearInterval);
        if (this.flickerTimeout) clearTimeout(this.flickerTimeout);
    }

    startTearCycle(): void {
        this.loopTear(1000);
    }

    loopTear(initialDelay?: number): void {
        const randomDelay = initialDelay ?? (Math.floor(Math.random() * 2000) + 1000);


        this.flickerTimeout = setTimeout(() => {
            this.triggerTearSequence();
            this.loopTear();
        }, randomDelay);
    }

    triggerTearSequence(): void {
        let flickers = 0;
        const maxFlickers = 10;
        const flickerInterval = setInterval(() => {
            this.tearStyle = {
                filter: this.generateRandomFilter(true),
                transform: this.generateRandomTransform(),
                transition: 'none'
            };
            this.cdr.detectChanges();
            flickers++;

            if (flickers >= maxFlickers) {
                clearInterval(flickerInterval);
                this.setStableReality();
            }
        }, 60);
    }

    setStableReality(): void {
        this.tearStyle = {
            filter: this.generateRandomFilter(false),
            transform: 'scale(1) skew(0deg)',
            transition: 'filter 0.5s ease, transform 0.5s ease'
        };
        this.cdr.detectChanges();
    }

    private generateRandomFilter(aggressive: boolean): string {
        const hue = Math.floor(Math.random() * 360);
        const sat = aggressive ? Math.floor(Math.random() * 500) : Math.floor(Math.random() * 200) + 50;
        const cont = aggressive ? Math.floor(Math.random() * 200) + 100 : Math.floor(Math.random() * 50) + 100;
        const sepia = aggressive ? Math.floor(Math.random() * 100) : Math.floor(Math.random() * 50);
        const invert = aggressive && Math.random() > 0.7 ? 100 : 0;

        return `hue-rotate(${hue}deg) saturate(${sat}%) contrast(${cont}%) sepia(${sepia}%) invert(${invert}%)`;
    }

    private generateRandomTransform(): string {
        const scale = 0.9 + Math.random() * 0.2;
        const skewX = Math.floor(Math.random() * 20) - 10;
        const skewY = Math.floor(Math.random() * 10) - 5;
        const translateX = Math.floor(Math.random() * 10) - 5;
        return `scale(${scale}) skew(${skewX}deg, ${skewY}deg) translate(${translateX}px)`;
    }
}
