import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import { Menu, Transition } from "@headlessui/react";
import IMG from "../../images/Service2.png";
import BgImg from "../../images/bg_4.png";
import Accordion from "@/Components/Accordion";

export default function Faq({ rows }) {
    return (
        <GuestLayout>
            <Head title="FAQ" />
            <div className="tw-w-full tw-px-0">
                <section
                    className="tw-flex tw-flex-row tw-justify-center tw-items-center tw-w-full tw-h-60 tw-relative"
                    style={{ backgroundImage: `url("${BgImg}")` }}
                >
                    <div className="tw-absolute tw-inset-0 tw-bg-black tw-bg-opacity-50 tw-z-10 tw-h-60"></div>
                    <h1 className="tw-mb-2 tw-text-white tw-text-5xl brightness-100 tw-z-20">
                        FAQ
                    </h1>
                </section>
                {/* model */}
                <section>
                    <div
                        class="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5
                                        class="modal-title"
                                        id="exampleModalLabel"
                                    >
                                        Terms and Conditions
                                    </h5>
                                    <button
                                        type="button"
                                        class="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <h5>
                                        <strong>Privacy Policy</strong>
                                    </h5>
                                    <div>
                                        We at Wiconnekt have designed our
                                        business practices to safeguard your
                                        privacy. This privacy policy applies to
                                        all the web pages related to this
                                        website.
                                        <br />
                                        You can visit www.wiconnekt.co.za
                                        without revealing who you are or
                                        providing any personal information about
                                        yourself. The Site may collect certain
                                        information about your visit, such as
                                        the name of the Internet service
                                        provider and the Internet Protocol (IP)
                                        address through which you access the
                                        Internet; the date and time you access
                                        the Site; the pages that you access
                                        while at the Site and the Internet
                                        address of the Web site from which you
                                        linked directly to our site. This
                                        information is used to help improve the
                                        Site, analyze trends, and administer the
                                        Site.
                                        <br />
                                        <br />
                                        There will be times, such as when you
                                        submit a questionnaire, request a
                                        service, purchase a product, etc., when
                                        we will need to obtain personally
                                        identifiable information from you or
                                        about you. Such personally identifiable
                                        information may include your name, home
                                        address, e-mail address, telephone
                                        number, identity/passport number,
                                        income, credit references, etc. The
                                        information we receive about you or from
                                        you may be used by us or shared by us
                                        with our corporate affiliates, agents,
                                        vendors and others to help process or
                                        complete a transaction; to comply with
                                        any law, regulation, audit or court
                                        order; to help improve our website or
                                        the products or services we offer; for
                                        research; to better understand our
                                        clients' needs; to develop new
                                        offerings; and to alert you to new
                                        products and services in which you may
                                        be interested. The information will not
                                        be used for anything other than which is
                                        stated in the Terms & Conditions of use
                                        for this service. None of the
                                        information will be sold or made
                                        available to anyone. By accepting these
                                        Terms & Conditions you consent to
                                        receive informational material from us,
                                        this would include promotions, price
                                        changes and information related to your
                                        services. We believe that knowing more
                                        about you can enable us to serve you
                                        better.
                                        <br />
                                        You should be aware that we collect
                                        usage information about you when you
                                        visit us, which helps us understand how
                                        our site is navigated, how many visitors
                                        arrive at specific pages, the length and
                                        frequency of a stay at our website, etc.
                                        In addition, Wiconnekt web pages may
                                        place "cookies" on your personal
                                        computer. "Cookies" are small
                                        identifiers, similar to a license plate,
                                        that help us to recognize you if you
                                        visit our website again. Cookies are
                                        used to help us personalize your viewing
                                        experiences. Cookies are not designed to
                                        be used to get data from your hard
                                        drive, your e-mail or any other personal
                                        data about you. You can reject cookies
                                        by changing your browser settings.
                                        Please note, however, that if you reject
                                        our cookies it is possible that some web
                                        pages may not properly load, your access
                                        to certain information might be denied
                                        or you might have to enter information
                                        about you or your application, inquiry
                                        or purchase more than once.
                                        <br />
                                        <br />
                                        We safeguard your information using
                                        known encryption, security standards and
                                        procedures. We also assess new
                                        technology for protecting client
                                        information on an ongoing basis. Please
                                        be aware that we may change our
                                        Statement of Privacy from time to time.
                                        If we do, we will update this Statement
                                        of Privacy at our website, so be sure to
                                        check back here frequently. If you have
                                        any questions about our Statement of
                                        Privacy or privacy policies, please feel
                                        free to e-mail your questions to us at
                                        info@wiconnekt.co.za By using this
                                        website, you signify your acceptance of
                                        our Privacy Policy. If you do not agree
                                        to this policy, please do not use our
                                        site and related pages. Your continued
                                        use of the website following the posting
                                        of changes to these terms will mean that
                                        you accept those changes.
                                        <br />
                                    </div>
                                    <h5>
                                        <strong>Service Policy</strong>
                                    </h5>
                                    <p>
                                        When you click to make a purchase with
                                        us legal obligations arise and your
                                        right to refund of monies charged to
                                        your credit card or paid in any other
                                        way agreed by us, are limited by our
                                        terms & conditions. You must not make
                                        any purchase through this site unless
                                        you understand and agree all our terms
                                        and conditions. Once payment is made for
                                        the purchase, it is deemed that you have
                                        read and understood the terms and
                                        conditions for such purchase. If you
                                        have any queries please contact us
                                        before making any purchase for any
                                        service through this website. Our 24
                                        hour, 7 day a week support number is 087
                                        821 7348.
                                    </p>
                                    <hr />
                                    <h5>
                                        <strong>Service Levels</strong>
                                    </h5>
                                    <p>
                                        All services sold by Wiconnekt are
                                        provided as a best-effort service,
                                        uptime and speeds cannot be guaranteed
                                        unless otherwise stated. During any
                                        technical failure, modification or
                                        maintenance of the service provided,
                                        Wiconnekt will use its reasonable
                                        endeavors to resume the service as soon
                                        as possible. This excludes upstream
                                        provider infrastructure that is not
                                        within the control of Wiconnekt.
                                    </p>
                                    <h5>
                                        <strong>Static IPs</strong>
                                    </h5>
                                    <p>
                                        Only one static IP can be linked to one
                                        active ADSL service (username) A static
                                        IP cannot be transferred from one
                                        service to another The static IP will
                                        remain active as long as the ADSL
                                        service (username) it is linked to is
                                        active, should the ADSL service
                                        (username) it is linked to be cancelled,
                                        the static IP will automatically be
                                        deleted. Please be aware that once the
                                        static IP is deleted it cannot be
                                        recovered, should you repurchase the
                                        service a new static IP will be issued.
                                        Failure to pay for your static IP and
                                        linked service before the due date will
                                        result in the static IP being deleted,
                                        once the static IP has been deleted it
                                        cannot be recovered. A static IP can be
                                        cancelled during the course of a month,
                                        but the cancellation will only take
                                        effect at the end of the month. E.G if
                                        we receive your cancellation on the 1st
                                        or 15th of July, the static IP will only
                                        be deleted on the 31st of July at
                                        11:59pm. Your Static IP can be switched
                                        on and off from your CCP/RCP. Static
                                        IP's are assigned on your PPPOE
                                        connection. Due to privacy and security
                                        concerns, internal network
                                        configurations like natting and routing
                                        will need to be set up and maintained by
                                        your network administrator.
                                        <br />
                                        <br />
                                        Static IPs are available for all monthly
                                        billed services, except SAIX based
                                        services and trial services.
                                        <br />
                                        <br />
                                        All Static IPs on our new network are
                                        now allocated per region:
                                        <br />
                                        <br />
                                        North = Free State, Gauteng, Mpumalanga,
                                        Limpopo, North West East = KwaZulu-Natal
                                        South = Eastern Cape, Western Cape and
                                        the Northern Cape To give you optimal
                                        routing and throughput, we need to lock
                                        your DSL service down to the last DSL
                                        line you connected from. Should you move
                                        to a different region and would like to
                                        connect from your new location, then you
                                        will have to cancel your current Static
                                        IP and apply for a brand new Static IP
                                        address. Wiconnekt does not advise that
                                        Dynamic/Static IP's are used to run
                                        email servers. Should the client choose
                                        to use our Dynamic/Static IP services to
                                        run an email server it is the clients
                                        responsibility to monitor and request
                                        removal of all blacklisting's related to
                                        the IP on services such as
                                        RBL's/SBL's/PBL's and not the
                                        responsibility of Wiconnekt.
                                        <br />
                                        <br />
                                        When you enable the Static IP option in
                                        your Control Panel, we will force your
                                        service to disconnect in order to
                                        establish your region, so that we can
                                        allocate the appropriate Static IP in
                                        your area.
                                        <br />
                                        <br />
                                        The username will be locked to the first
                                        successful connection we receive,
                                        meaning no other connections can be
                                        established from another location.
                                        <br />
                                        <br />
                                        Also note that the service will only
                                        allow one concurrent connection.
                                        <br />
                                        <br />
                                        For additional support please go to{" "}
                                        <a href="https://portforward.com/">
                                            www.portforward.com
                                        </a>
                                    </p>
                                    <hr />
                                    <h5>
                                        <strong>Delivery Policy</strong>
                                    </h5>
                                    <p>
                                        This delivery policy applies to services
                                        delivered by an Wiconnekt appointed
                                        representative only. The delivery of
                                        certain products/services sold by
                                        Wiconnekt are handled directly by the
                                        supplier or provider. In these cases the
                                        delivery policy will be stated in the
                                        Terms and Conditions for that particular
                                        product/service. If you are not sure
                                        please contact us so that we may advise
                                        you on the delivery policy that applies
                                        to your purchase.
                                        <br />
                                        <br />
                                        Delivery times stated are not guaranteed
                                        but are generally attainable within
                                        major centres. A possible delay of 24 to
                                        96 hours can be expected outside of
                                        major centres and additional delivery
                                        costs may apply. Some deliveries might
                                        require that information or documents
                                        must be produced and copies thereof
                                        provided during the delivery, this will
                                        be communicated on purchase of the
                                        device or product if it is required.
                                        <br />
                                        <br />A physical address is required for
                                        the delivery of your order. Orders to
                                        Post boxes/Private bags/Post Offices
                                        will not be accepted.
                                        <br />
                                        <br />
                                        Deliveries take place on weekdays during
                                        business hours and exclude weekends and
                                        public holidays, your delivery will be
                                        dispatched on the 1st working day
                                        thereafter.
                                        <br />
                                        <br />
                                        Delivery times may be delayed should the
                                        need arise for clearance of payment.
                                        Clearance for debit order payments may
                                        take up to 10 days to clear.
                                        <br />
                                        <br />
                                        Wiconnekt will not arrange collection of
                                        units for exchange or return (or cover
                                        related costs). The client will be
                                        responsible for arranging for the unit
                                        to be delivered to Wiconnekt. This will
                                        in no way impact the continued warranty
                                        provisions, and only relates to courier
                                        charges and logistics.
                                        <br />
                                        <br />
                                        The Courier Delivery Fee charged during
                                        checkout may differ once your order is
                                        finalised. Should this occur, we will
                                        contact you before proceeding with the
                                        delivery of your order.
                                    </p>
                                    <hr />
                                    <h5>
                                        <strong>Refunds Policy</strong>
                                    </h5>
                                    <p>
                                        Refunds will not be granted for services
                                        purchased in error. Should it be proven
                                        that a service is not working as per the
                                        Product Description, Terms and
                                        Conditions and/or Acceptable Usage
                                        Policy a refund will be granted. Refunds
                                        for amounts deposited into a Wiconnekt
                                        banking account erroneously will also
                                        have a 15% fee levied to cover our bank
                                        charges and will only be considered for
                                        processing 7 days after the original
                                        payment date. Refunds for debit order
                                        and credit card payments are processed
                                        after the second week of the month.
                                    </p>
                                    <hr />
                                    <h5>
                                        <strong>Cancellations Policy</strong>
                                    </h5>
                                    <p>
                                        The cancellation of a product or service
                                        is the Clients responsibility.
                                        Cancellations must be actioned from the
                                        Control Panel. Email, fax and telephonic
                                        cancellations will not be accepted, all
                                        cancellations must be processed via the
                                        Control Panel. Failure to cancel your
                                        services will result in your service or
                                        product being activated for the new
                                        month and therefore liable for payment.
                                        A minimum calendar months' notice is
                                        required for all services unless
                                        otherwise stated. Promotions carry
                                        additional Terms and early cancellation
                                        fees may be payable.
                                        <br />
                                        <br />
                                        Wiconnekt will not be responsible for
                                        incorrect cancellations processed via
                                        the Control Panel, or be liable for any
                                        losses incurred.
                                    </p>
                                    <hr />
                                    <h5>
                                        <strong>Security Policy</strong>
                                    </h5>
                                    <p>
                                        Credit Card transactions are processed
                                        via our payment service provider Virtual
                                        Card Services PTY (Ltd). As a payment
                                        gateway Virtual Card Services does not
                                        and cannot verify, authorise or settle
                                        any transaction. Virtual Card Services
                                        provides the conduit (the messenger) for
                                        information between the merchant and the
                                        merchant's ban
                                    </p>
                                    <hr />
                                    <h5>
                                        <strong>Transaction security</strong>
                                    </h5>
                                    <p>
                                        Virtual Card Services uses 128-bit SSL
                                        certificates to ensure that all
                                        transactional information is passed
                                        securely between the merchant and
                                        Virtual Card Services site. No
                                        cardholder information is ever passed
                                        unencrypted and any messages sent to our
                                        servers from Virtual Card Services are
                                        signed using MD5 hashing to prevent
                                        tampering. In the event that PAN
                                        information is returned, the PAN will be
                                        hashed, including the first 6 digits and
                                        last 4 digits of the PAN.
                                    </p>
                                    <hr />
                                    <h5>
                                        <strong>
                                            Encryption and Data Storage
                                        </strong>
                                    </h5>
                                    <p>
                                        All sensitive data is secured and stored
                                        within Virtual Card Services systems
                                        using internationally recognised 256-bit
                                        encryption standards. The data held by
                                        Virtual Card Services is extremely
                                        secure and strict policies are in place
                                        ensuring limited and secure access to
                                        their servers internally are maintained.
                                        The information stored by Virtual Card
                                        Services is highly regulated and audited
                                        regularly by a Quality Assurance
                                        Assessor (QSA).
                                    </p>
                                    <hr />
                                    <h5>
                                        <strong>System security</strong>
                                    </h5>
                                    <p>
                                        Virtual Card Services systems are
                                        regularly scanned ensuring that their
                                        infrastructure and network remains
                                        secure at all times. Further to this,
                                        Virtual Card Services use an Approved
                                        Scanning Vendor (ASV) approved by the
                                        payment card brands to review scans
                                        quarterly. Additionally, Virtual Card
                                        Services is PCI DSS Level 1 certified,
                                        which is the highest level of
                                        compliance. Virtual Card Services are
                                        audited annually by a QSA ensuring that
                                        the upmost security is maintained at all
                                        times.
                                    </p>
                                    <hr />
                                    <h5>
                                        <strong>Payment Options/Terms</strong>
                                    </h5>
                                    <p>
                                        All transactions will be processed in
                                        South African Rands (ZAR). We do not
                                        extend credit and payment is required up
                                        front, services will not be activated
                                        without payment. As of 1 October 2014 we
                                        no longer accept Cash Deposit and
                                        Electronic Funds Transfer (EFT) as a
                                        method of payment.
                                    </p>
                                    <hr />
                                    <h5>
                                        <strong>Credit Card Authority</strong>
                                    </h5>
                                    <p>
                                        By supplying your "credit card/debit
                                        card/cheque card" hereafter referred to
                                        as "account/card" details and agreeing
                                        to the Terms & Conditions the following
                                        will be seen as accepted and agreed to:
                                        <br />
                                        <br />
                                        I/we hereby request and authorize you to
                                        draw against my/our card (or any other
                                        bank or branch to which I/we may
                                        transfer my/our account/card) the due
                                        amount or any variable amount pertaining
                                        to this agreement, on the first working
                                        day of each month. This being the amount
                                        necessary for the settlement of the
                                        monthly invoice and/or any overdue
                                        amounts, due to you in respect of my/our
                                        purchases/contract/agreement.
                                        <br />
                                        <br />
                                        All such withdrawals from my/our
                                        account/card by you shall be treated as
                                        though they had been signed by me/us
                                        personally. I/we, "instruct" and
                                        authorize your agent Virtual Card
                                        Services PTY (Ltd), or by computer
                                        through a system provided by the South
                                        African Banks to draw against my/our
                                        account/card.
                                        <br />
                                        <br />
                                        I/we understand that if account/card
                                        details have been supplied the
                                        withdrawals authorized here will be
                                        processed by BankServ. I/we also
                                        understand that details of each
                                        withdrawal will be printed on my/our
                                        statement. I/we agree to pay any banking
                                        charges relating to this debit
                                        instruction. This authority may be
                                        cancelled by me at any time by
                                        updating/changing the payment method
                                        from within the Control Panel.
                                        <br />
                                        <br />
                                        Renewals (monthly invoice) will be
                                        processed on the first working day of
                                        every month. If your payment fails, your
                                        service(s) will be disabled immediately
                                        Please note that if you are cancelling
                                        your service(s) with Wiconnekt, you need
                                        to cancel via your control panel before
                                        the last day of the month if you are
                                        paying via account/card (excludes debit
                                        order payments). Failure to do so will
                                        result in the product being activated
                                        and the monthly subscription being
                                        debited.
                                        <br />
                                        <br />
                                        All other account/card instructions (new
                                        account sign ups/activations,
                                        hardware/device purchases, top ups,
                                        upgrades), besides the monthly
                                        subscription, will be processed on a
                                        daily basis.
                                    </p>
                                    <hr />
                                    <h5>
                                        <strong>Debit Order Authority</strong>
                                    </h5>
                                    <p>
                                        This Authority and Mandate refers to our
                                        contract as dated as on acceptance
                                        hereof ("the Agreement"). I / We hereby
                                        authorise you to issue and deliver
                                        payment instructions to the bank for
                                        collection against my / our above
                                        mentioned account or credit card at my /
                                        our above mentioned bank (or any other
                                        bank or branch to which I / we may
                                        transfer my / our account) on condition
                                        that the sum of such payment
                                        instructions will never exceed my / our
                                        obligations as agreed to in the
                                        Agreement, and commencing on the
                                        commencement date and continuing until
                                        this Authority and Mandate is terminated
                                        by me / us.
                                        <br />
                                        <br />
                                        The individual payment instructions so
                                        authorised to be issued must be issued
                                        and delivered as follows
                                        <br />
                                        <br />
                                        i. On the 1st working day ("payment
                                        day") of each and every month. In the
                                        event that the payment day falls on a
                                        Saturday, Sunday or recognized South
                                        African public holiday, the payment day
                                        will automatically be the very next
                                        ordinary business day. Further, if there
                                        are insufficient funds in the nominated
                                        account to meet the obligation, you are
                                        entitled to track my account and
                                        re-present the instruction for payment
                                        as soon as sufficient funds are
                                        available in my account.
                                        <br />
                                        <br />
                                        Debit orders will be processed on the
                                        first working day of every month for
                                        renewal services. If your debit order
                                        fails, your service(s) will be disabled
                                        immediately. Your debit order against
                                        your bank account is an automated
                                        process and cannot be stopped after the
                                        24th of each month. Please note that if
                                        you are cancelling your service(s) with
                                        Wiconnekt, you need to cancel via the
                                        control panel by the 24th of the month
                                        for the end of the following month.
                                        <br />
                                        <br /> All other debit order
                                        instructions (new account sign
                                        ups/activations, hardware/device
                                        purchases, top ups, upgrades), besides
                                        the monthly subscription debit orders,
                                        will be processed on a daily basis.
                                        Should you order a new service or
                                        upgrade your existing service after the
                                        24th of the month, your first renewal
                                        debit order thereafter will remain
                                        unchanged and an additional debit order
                                        will be processed for the price
                                        difference within the first 5 working
                                        days of the month. The following month
                                        the full amount for the updated services
                                        will be processed in a single debit
                                        order. Should you cancel one of your
                                        services or downgrade a service after
                                        the 24th of the month, your first
                                        renewal debit order will remain
                                        unchanged, but the price difference will
                                        reflect as a credit on your account,
                                        which can either be refunded to you or
                                        will automatically be deducted from your
                                        next debit order.
                                        <br />
                                        <br />I / We understand that the
                                        withdrawals hereby authorised will be
                                        processed through a computerized system
                                        provided by the South African Banks and
                                        I also understand that details of each
                                        withdrawal will be printed on my bank
                                        statement. Each transaction will contain
                                        a number, which must be included in the
                                        said payment instruction and if provided
                                        to you should enable you to identify the
                                        instruction. I / We shall not be
                                        entitled to any refund of amounts which
                                        you have withdrawn while this authority
                                        was in force, if such amounts were
                                        legally owing to you.
                                    </p>
                                    <hr />
                                    <h5>
                                        <strong>Debit Order Mandate</strong>
                                    </h5>
                                    <p>
                                        I / We acknowledge that all payment
                                        instructions issued by you shall be
                                        treated by my / our above mentioned bank
                                        as if the instructions had been issued
                                        by me personally.
                                    </p>
                                    <hr />
                                    <h5>
                                        <strong>
                                            Debit Order Cancellation
                                        </strong>
                                    </h5>
                                    <p>
                                        I / We agree that although this
                                        Authority and Mandate may be cancelled
                                        by me / us, such cancellation will not
                                        cancel the Agreement. I / We shall not
                                        be entitled to any refund of amounts
                                        which you have withdrawn while this
                                        authority was in force, if such amounts
                                        were legally owing to you.
                                    </p>
                                    <hr />
                                    <h5>
                                        <strong>Debit Order Assignment</strong>
                                    </h5>
                                    <p>
                                        I / We acknowledge that this Authority
                                        may be ceded to or assigned to a third
                                        party if the agreement is also ceded or
                                        assigned to that third party, but in the
                                        absence of such assignment of the
                                        Agreement, this Authority and Mandate
                                        cannot be assigned to any third party.
                                    </p>
                                    <hr />
                                    <h5>
                                        <strong>Debit Order Contract</strong>
                                    </h5>
                                    <p>
                                        The signed Authority and Mandate refers
                                        to our contract as dated as on signature
                                        hereof ("the Agreement"). I / We hereby
                                        authorize you to issue and deliver
                                        payment instructions to the bank for
                                        collection against my / our above
                                        mentioned account at my / our above
                                        mentioned bank (or any other bank or
                                        branch to which I / We may transfer my /
                                        our account) on condition that the sum
                                        of such payment instructions will never
                                        exceed my / our obligations as agreed to
                                        in the Agreement, and commencing on the
                                        commencement date and continuing until
                                        this Authority and Mandate is terminated
                                        by me / us by giving you notice in
                                        writing sent by email to
                                        accounts@internet.co.za by no later than
                                        the 20th of the month or by logging in
                                        on your control panel and updating your
                                        payment method by no later than the 24th
                                        of the month.
                                        <h5>
                                            <strong>Prorata Billing</strong>
                                        </h5>
                                    </p>
                                    <p>
                                        Prorata billing applies to all new
                                        monthly billed services and on the
                                        initial purchase only. Prorata billing
                                        will not apply should you fail to pay
                                        your renewal invoice or any outstanding
                                        invoice on your account, the
                                        renewal/outstanding invoice must first
                                        be paid in order to qualify for the
                                        prorata rate on a new service. The
                                        bandwidth on a per gig service will be
                                        prorated together with the price on
                                        purchase. The prorata price and
                                        bandwidth is calculated according to the
                                        purchase date.
                                        <br />
                                        <br />
                                        Service Changes (Applies to DSL, Fibre,
                                        Mobile and VoIP)
                                        <br />
                                        <br />
                                        Service Changes are changes to the
                                        product, speed, combo or data purchased
                                        which changes the renewal of the
                                        service/s and are billed prorata.
                                        <br />
                                        <br />
                                        For ease of understanding, services
                                        referred to as Upgraded services are
                                        services which result in a price
                                        increase on the next renewal and
                                        Downgraded services are services which
                                        result in a lesser billed renewal than
                                        the current service.
                                        <br />
                                        <br />
                                        New services can only be set to
                                        Downgrade from the second month (month
                                        after activation) and will only apply
                                        from the following month (month 3).
                                        <br />
                                        <br />
                                        Clients are not able to service change
                                        to an Upgraded service and then service
                                        change to a Downgraded service in the
                                        same month. The Upgraded service change
                                        must first be renewed before a Downgrade
                                        can be set for the next renewal.
                                        <br />
                                        <br />
                                        Example: a Mobile Data service is
                                        service changed from 1GB to 5GB in
                                        August. The client will only be able to
                                        set a service change to a Mobile Data
                                        service smaller than 5GB during the
                                        month of September for October as the
                                        service must first be renewed on 1
                                        September at 5GB before it can be
                                        downgraded.
                                    </p>
                                    <hr />
                                    <h5>
                                        <strong>Transfer of Data</strong>
                                    </h5>
                                    <p>
                                        Clients have the ability to transfer
                                        their unused data to another Wiconnekt
                                        Client using the same service (dsl
                                        capped to dsl capped, mobile to mobile
                                        etc.). Clients using Openserve Fibre and
                                        Openserve DSL Capped data will be able
                                        to transfer between the two service
                                        types. Uncapped data, RAIN data and Cell
                                        C data cannot be transferred.
                                        <br />
                                        <br />
                                        Transferred data will be transferred in
                                        the state that it is currently in. If
                                        the data transferred is rollover data in
                                        month 2, it will transfer as month 2
                                        rollover data to the client receiving
                                        the data. Transferred data retains the
                                        expiry date of the original purchase.The
                                        transfer of data must be done by signing
                                        into the Control Panel and providing the
                                        information required, data can only be
                                        transferred in predefined increments.
                                        Should we receive delayed usage reports
                                        which results in over usage of available
                                        data or a payment fails/is reversed for
                                        any reason, any transferred data will
                                        immediately be reversed. We reserve the
                                        right to refuse to allow the transfer of
                                        data for any client who we deem to be
                                        abusing the process.
                                        <br />
                                        <br />
                                        An explanation of how Rollover Data
                                        works can be found under the section for
                                        the service type you have purchased.
                                    </p>
                                    <hr />
                                    <h5>
                                        <strong>Usage Notifications</strong>
                                    </h5>
                                    <p>
                                        Wiconnekt will send an email/sms
                                        notification to all data users who have
                                        not opted out of receiving notifications
                                        when their data usage reaches 50%, 80%
                                        and 100% of the available total. These
                                        notifications will be based on the
                                        information available to us at the time
                                        of sending the notification from our
                                        system and as such cannot be guaranteed
                                        to be 100% accurate when received by the
                                        client.
                                    </p>
                                    <hr />
                                    <h5>
                                        <strong>
                                            Debit Orders / Credit Cards
                                        </strong>
                                    </h5>
                                    <p>
                                        All transactions will be processed in
                                        South African Rands (ZAR). We accept
                                        credit card and debit order as methods
                                        of payment. We do not extend credit and
                                        payment is required up front, services
                                        will not be activated without payment.
                                        <br />
                                        <br />
                                        As of 1 August 2020 we no longer accept
                                        Cash as a method of payment. Clients who
                                        are in the process of transitioning to
                                        Credit Card or Debit Order will continue
                                        to be bound by the conditions below
                                        until the transition to Credit Card or
                                        Debit Order has been completed:
                                        <br />
                                        <br />
                                        All manual (cash deposit/EFT) monthly
                                        payments must reach us before 5pm on the
                                        last day of the month, failure to do so
                                        will result in all services being
                                        suspended until payment is received.
                                        Always use your client code as your
                                        reference when making payment to avoid
                                        delays in your payment being allocated.
                                        Failure to make payment by the due date
                                        will result in your services being
                                        suspended. Failure to pay your ADSL Line
                                        services on the due date may result in
                                        your ADSL Line services being
                                        transferred to Telkom and Telkom will
                                        continue to bill you for this service.
                                        <br />
                                        <br />
                                        Please email your Proof of Payment/Cash
                                        Deposit slip to support@wiconnekt.co.za,
                                        please remember to use your client code
                                        as your reference when making your
                                        payment.
                                    </p>
                                    <hr />
                                    <h5>
                                        <strong>Month End</strong>
                                    </h5>
                                    <p>
                                        Please note that the control panels will
                                        be offline between 19:00 and 00:30 on
                                        the last day of every month due to
                                        various monthly processing operations
                                        that need to be performed. Services that
                                        have reached 100% usage will be capped
                                        and you will not be able to top up until
                                        00:30. Please ensure that all new
                                        purchases, service changes and top ups
                                        have been processed before 17:00 on the
                                        last day of the month to ensure that
                                        your request is actioned before 19:00.
                                    </p>
                                </div>
                                <div class="modal-footer">
                                    <button
                                        type="button"
                                        class="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-primary"
                                    >
                                        Save changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* faq section */}
                <section>
                    <div className="container">
                        <div className="my-5">
                            <h2 className="fs-2">Faq</h2>
                        </div>
                        <Accordion>
                            {rows.map((row, index) => (
                                <div className="accordion-item">
                                    <h2
                                        className="accordion-header"
                                        id={"heading" + (index + 1)}
                                    >
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={
                                                "#collapse" + (index + 1)
                                            }
                                            aria-expanded="false"
                                            aria-controls={
                                                "collapse" + (index + 1)
                                            }
                                        >
                                            {/* heading */}
                                            {row[0]}
                                        </button>
                                    </h2>
                                    <div
                                        id={"collapse" + (index + 1)}
                                        className={
                                            "accordion-collapse collapse " +
                                            (index == 0 ? "show" : "")
                                        }
                                        aria-labelledby={
                                            "heading" + (index + 1)
                                        }
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            {/* body */}
                                            {row[1]}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Accordion>
                    </div>
                </section>
                {/* modal button */}
                <section>
                    <div className="container my-5">
                        <button
                            type="button"
                            className="btn btn-warning"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                        >
                            Terms & Conditions
                        </button>
                    </div>
                </section>
            </div>
        </GuestLayout>
    );
}
