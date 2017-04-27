export class NavigationService {
    RECIPE = 'recipe';
    SHOPPING_LIST = 'shoppinglist';

    currentFeature = this.RECIPE;

    selectFeature(feature: string) {
        this.currentFeature = feature;
    }
}