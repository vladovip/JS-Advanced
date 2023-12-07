describe('wedingDay', function () {
    describe('pickVenue', function () {
        it('Testing input with wrong type of parameters', function () {
            let capacity = "10";
            let pricePerGuest = "10";
            let location = 'Varna';

            let result1 = () => wedingDay.pickVenue(10, pricePerGuest, location);
            let result2 = () => wedingDay.pickVenue(capacity, 10, location);
            let result3 = () => wedingDay.pickVenue(capacity, pricePerGuest, location);
            let result4 = () => wedingDay.pickVenue(capacity, pricePerGuest, []);
            let result5 = () => wedingDay.pickVenue(capacity, pricePerGuest, '');

            expect(result1).to.throw(Error, "Invalid Information!");
            expect(result2).to.throw(Error, "Invalid Information!");
            expect(result3).to.throw(Error, "Invalid Information!");
            expect(result4).to.throw(Error, "Invalid Information!");
            expect(result5).to.throw(Error, "Invalid Information!");
        });

        it('Testing input string with wrong location', function () {
            let capacity = 150;
            let pricePerGuest = 120;
            let location = 'Sofia';

            let result = () => wedingDay.pickVenue(capacity, pricePerGuest, location);

            expect(result).to.throw(Error, `The location of this venue is not in the correct area!`);
        });

        it('Testing input string with correct parameters', function () {
            let capacity = 150;
            let pricePerGuest = 120;
            let location = 'Varna';

            let result = wedingDay.pickVenue(capacity, pricePerGuest, location);

            expect(result).to.equal(`This venue meets the requirements, with capacity of ${capacity} guests and ${pricePerGuest}$ cover.`);
        });

        it('Testing input with incorect arguments', function () {
            let capacity = 149;
            let capacity1 = 150;
            let pricePerGuest = 121;
            let pricePerGuest1 = 120;
            let location = 'Varna';

            let result = wedingDay.pickVenue(capacity, pricePerGuest1, location);
            let result1 = wedingDay.pickVenue(capacity1, pricePerGuest, location);
            let result2 = wedingDay.pickVenue(capacity, pricePerGuest, location);

            expect(result).to.equal(`This venue does not meet your requirements!`);
            expect(result1).to.equal(`This venue does not meet your requirements!`);
            expect(result2).to.equal(`This venue does not meet your requirements!`);
        });
    });

    describe('otherSpendings', function () {
        it('Testing input with wrong type of parameters', function () {
            let weddingDecoration = ['flowers', "Fabric drapes and curtains"];
            let photography = ["pictures", "video"];
            let discount = true;

            let result1 = () => wedingDay.otherSpendings('10', photography, discount);
            let result2 = () => wedingDay.otherSpendings(weddingDecoration, 10, discount);
            let result3 = () => wedingDay.otherSpendings(weddingDecoration, photography, 10);
            let result4 = () => wedingDay.otherSpendings(weddingDecoration, photography, 'true');

            expect(result1).to.throw(Error, "Invalid Information!");
            expect(result2).to.throw(Error, "Invalid Information!");
            expect(result3).to.throw(Error, "Invalid Information!");
        });

        it('Testing input with correct parameters and discount', function () {
            let weddingDecoration = ['flowers', "Fabric drapes and curtains"];
            let photography = ["pictures", "video"];
            let discount = true;

            let result = wedingDay.otherSpendings(weddingDecoration, photography, discount);

            expect(result).to.equal(`You spend ${2465}$ for wedding decoration and photography with 15% discount!`)
        });

        it('Testing input with correct wedingDecoration and discount', function () {
            let weddingDecoration = ['flowers', "Fabric drapes and curtains"];
            let photography = [];
            let discount = true;

            let result = wedingDay.otherSpendings(weddingDecoration, photography, discount);

            expect(result).to.equal(`You spend ${765}$ for wedding decoration and photography with 15% discount!`)
        });

        it('Testing input with correct photography and discount', function () {
            let weddingDecoration = ["Fabric drapes and curtains"];
            let photography = ["pictures"];
            let discount = true;

            let result = wedingDay.otherSpendings(weddingDecoration, photography, discount);

            expect(result).to.equal(`You spend ${935}$ for wedding decoration and photography with 15% discount!`)
        });

        it('Testing input with correct photography and discount', function () {
            let weddingDecoration = [];
            let photography = ["pictures", "video"];
            let discount = true;

            let result = wedingDay.otherSpendings(weddingDecoration, photography, discount);

            expect(result).to.equal(`You spend ${1700}$ for wedding decoration and photography with 15% discount!`)
        });

        it('Testing input with correct parameters without discount', function () {
            let weddingDecoration = ['flowers', "Fabric drapes and curtains"];
            let photography = ["pictures", "video"];
            let discount = false;

            let result = wedingDay.otherSpendings(weddingDecoration, photography, discount);

            expect(result).to.equal(`You spend ${2900}$ for wedding decoration and photography!`)
        });

        it('Testing input with correct parameters without discount', function () {
            let weddingDecoration = ['flowers'];
            let photography = ["video"];
            let discount = false;

            let result = wedingDay.otherSpendings(weddingDecoration, photography, discount);

            expect(result).to.equal(`You spend ${1800}$ for wedding decoration and photography!`)
        });

        it('Testing input with correct wedingDecoration witout discount', function () {
            let weddingDecoration = ['flowers', "Fabric drapes and curtains"];
            let photography = [];
            let discount = false;

            let result = wedingDay.otherSpendings(weddingDecoration, photography, discount);

            expect(result).to.equal(`You spend ${900}$ for wedding decoration and photography!`)
        });

        it('Testing input with correct photography witout discount', function () {
            let weddingDecoration = [];
            let photography = ["pictures", "video"];
            let discount = false;

            let result = wedingDay.otherSpendings(weddingDecoration, photography, discount);

            expect(result).to.equal(`You spend ${2000}$ for wedding decoration and photography!`)
        });
    });
    describe('tableDistribution', function () {
        it('Testing input with wrong type of parameters', function () {
            let guests1 = 10;
            let tables1 = 15;
            let guests2 = -10;
            let tables2 = -15;
            let guests3 = 0;
            let tables3 = 0;

            let result = () => wedingDay.tableDistribution('10', '10')
            let result1 = () => wedingDay.tableDistribution('10', tables1);
            let result2 = () => wedingDay.tableDistribution(guests1, "10");
            let result3 = () => wedingDay.tableDistribution(guests2, tables1);
            let result4 = () => wedingDay.tableDistribution(guests1, tables2);
            let result5 = () => wedingDay.tableDistribution(guests1, tables3);
            let result6 = () => wedingDay.tableDistribution(guests3, tables1);

            expect(result).to.throw(Error, "Invalid Information!");
            expect(result1).to.throw(Error, "Invalid Information!");
            expect(result2).to.throw(Error, "Invalid Information!");
            expect(result3).to.throw(Error, "Invalid Information!");
            expect(result4).to.throw(Error, "Invalid Information!");
            expect(result5).to.throw(Error, "Invalid Information!");
            expect(result6).to.throw(Error, "Invalid Information!");
        });

        it('Testing input with correct parameters and result < 6', function () {
            let guests = 50;
            let tables = 10;

            let result = wedingDay.tableDistribution(guests, tables);

            expect(result).to.equal(`There is only ${5} people on every table, you can join some tables.`)
        });
        
        it('Testing input with correct parameters and result >= 6', function () {
            let guests = 60;
            let tables = 10;

            let result = wedingDay.tableDistribution(guests, tables);

            expect(result).to.equal(`You have ${10} tables with ${6} guests on table.`)
        });
    });
});